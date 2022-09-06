import { schedule } from "../schedule";
import { category } from "../category";

export const marine = {
  0: {
    name: "開拓工房の焼き貝",
    schedule: schedule.four,
    amount: 33,
    category: [category.marine, category.cooked],
  },
  1: {
    name: "アイルインクペースト",
    schedule: schedule.four,
    amount: 43,
    category: [category.marine, category.spice],
  },
  2: {
    name: "アイルコーラルリング",
    schedule: schedule.six,
    amount: 50,
    category: [category.marine, category.accessory],
  },
  3: {
    name: "アイルソルコット",
    schedule: schedule.six,
    amount: 64,
    category: [category.marine, category.food],
  },
  4: {
    name: "開拓工房の仙薬",
    schedule: schedule.six,
    amount: 64,
    category: [category.marine, category.chemical],
  },
  5: {
    name: "開拓工房のフィッシュパイ",
    schedule: schedule.six,
    amount: 93,
    category: [category.marine, category.snack],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.six,
    amount: 163,
    category: [category.marine, category.grocery],
  }
};
