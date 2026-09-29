import type { Locale } from './config';
import type { MapCopy } from '../data/maps';
import { en } from './maps-subsurface-en';
import { lv } from './maps-subsurface-lv';
import { pl } from './maps-subsurface-pl';
import { ru } from './maps-subsurface-ru';

export const subsurfaceCopy: Record<Locale, Record<string, MapCopy>> = { en, ru, pl, lv };
