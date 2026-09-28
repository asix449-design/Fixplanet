import type { Locale } from './config';
import type { MapCopy } from '../data/maps';
import { en } from './maps-crime-en';
import { ru } from './maps-crime-ru';
import { pl } from './maps-crime-pl';
import { lv } from './maps-crime-lv';

export const crimeCopy: Record<Locale, Record<string, MapCopy>> = { en, ru, pl, lv };
