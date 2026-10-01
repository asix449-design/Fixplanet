import type { Locale } from './config';
import type { MapCopy } from '../data/maps';
import { en } from './maps-climate-en';
import { lv } from './maps-climate-lv';
import { pl } from './maps-climate-pl';
import { ru } from './maps-climate-ru';

export const climateCopy: Record<Locale, Record<string, MapCopy>> = { en, ru, pl, lv };
