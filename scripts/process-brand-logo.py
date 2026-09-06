#!/usr/bin/env python3
"""Crop the official Fix Planet lockup and punch a clean alpha channel."""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public/images/brand/logo-lockup-source.png"
OUT = ROOT / "public/images/brand"


def main() -> None:
    im = Image.open(SRC).convert("RGB")
    rgb = np.array(im)
    h, w, _ = rgb.shape
    lum = rgb.max(axis=2)

    # Tight content box, then a little air for the flare halo.
    ys, xs = np.where(lum > 16)
    pad = 18
    x0, x1 = max(0, int(xs.min()) - pad), min(w, int(xs.max()) + pad + 1)
    y0, y1 = max(0, int(ys.min()) - pad), min(h, int(ys.max()) + pad + 1)
    crop = rgb[y0:y1, x0:x1]
    ch, cw, _ = crop.shape

    # PLANET is also lime — only the left side is the globe ring.
    left = crop[:, : max(1, cw // 2)]
    lime = (left[:, :, 1] > 160) & (left[:, :, 0] < 210) & (left[:, :, 2] < 90)
    lime_ys, lime_xs = np.where(lime)
    cx = float(lime_xs.mean())
    cy = float(lime_ys.mean())
    r = max(
        float(np.hypot(lime_xs - cx, lime_ys - cy).max()),
        min(cw, ch) * 0.28,
    )

    yy, xx = np.ogrid[:ch, :cw]
    dist = np.hypot(xx - cx, yy - cy)
    in_disk = dist <= (r + 5)
    orange = (crop[:, :, 0] > 140) & (crop[:, :, 1] < 160) & (crop[:, :, 2] < 90)
    ink = crop.max(axis=2) > 18

    alpha = np.zeros((ch, cw), dtype=np.uint8)
    alpha[in_disk | orange | ink] = 255
    # Soften the flare that sits just outside the disk.
    halo = (~in_disk) & orange
    if halo.any():
        fade = np.clip((r + 28 - dist) / 28, 0, 1)
        alpha[halo] = np.maximum(alpha[halo], (fade[halo] * 255).astype(np.uint8))

    rgba = np.dstack([crop, alpha])
    full = Image.fromarray(rgba, "RGBA")

    # Globe mark only — keep the flare, cut before FIX.
    mpad = 4
    mx0 = max(0, int(math.floor(cx - r - mpad)))
    my0 = max(0, int(math.floor(cy - r - mpad)))
    mx1 = min(cw, int(math.floor(cx + r + 2)))
    my1 = min(ch, int(math.ceil(cy + r + 10)))
    mark = full.crop((mx0, my0, mx1, my1))
    mark_w = 256
    mark.resize((mark_w, round(mark.height * (mark_w / mark.width))), Image.Resampling.LANCZOS).save(
        OUT / "logo-mark.png", optimize=True
    )

    lockup = full
    max_w = 960
    if lockup.width > max_w:
        max_h = round(lockup.height * (max_w / lockup.width))
        lockup = lockup.resize((max_w, max_h), Image.Resampling.LANCZOS)
    lockup.save(OUT / "logo.png", optimize=True)
    lockup.save(OUT / "logo.webp", quality=90, method=6)

    fav = Image.new("RGBA", (64, 64), (0, 0, 0, 255))
    fitted = mark.convert("RGBA")
    fitted.thumbnail((64, 64), Image.Resampling.LANCZOS)
    ox = (64 - fitted.width) // 2
    oy = (64 - fitted.height) // 2
    fav.paste(fitted, (ox, oy), fitted)
    fav.save(OUT / "favicon.png", optimize=True)
    print("lockup", lockup.size, OUT / "logo.png")
    print("mark", mark.size, OUT / "logo-mark.png")


if __name__ == "__main__":
    main()
