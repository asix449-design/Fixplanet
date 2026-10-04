import type { Locale } from './config';
import { en } from './economy-en';
import { lv } from './economy-lv';
import { pl } from './economy-pl';
import { ru } from './economy-ru';

export type EconomyPage = typeof en;

const page: Record<Locale, EconomyPage> = { en, ru, pl, lv };

export function getEconomyPage(locale: Locale): EconomyPage {
  return page[locale];
}
