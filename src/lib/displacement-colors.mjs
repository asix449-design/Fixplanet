/** Cause-point colours. Lime stays the coastline accent, so causes use three other hues. */
export const CAUSE_COLOR = {
  conflict: '#ff3b3b',
  'natural-disaster': '#ff8a1e',
  'climate-drought': '#2ec8f0',
  unclassified: '#ff3b3b',
};

export function causeColor(type) {
  if (type === 'unclassified') return CAUSE_COLOR.conflict;
  return CAUSE_COLOR[type] || CAUSE_COLOR.conflict;
}
