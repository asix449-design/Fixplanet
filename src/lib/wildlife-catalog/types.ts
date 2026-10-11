import type { z } from 'astro/zod';
import {
  CardCopy as CardCopySchema,
  CardMeta as CardMetaSchema,
  CopyFile as CopyFileSchema,
  MetaFile as MetaFileSchema,
  Registry as RegistrySchema,
  StatusLabels as StatusLabelsSchema,
} from './schema.mjs';

export type Registry = z.infer<typeof RegistrySchema>;
export type CardMeta = z.infer<typeof CardMetaSchema>;
export type CardCopy = z.infer<typeof CardCopySchema>;
export type MetaFile = z.infer<typeof MetaFileSchema>;
export type CopyFile = z.infer<typeof CopyFileSchema>;
export type StatusLabels = z.infer<typeof StatusLabelsSchema>;
