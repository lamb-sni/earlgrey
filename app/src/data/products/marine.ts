import { schedule } from "../schedule";
import { category } from "../category";

export const marine = {
  0: {
    name: "開拓工房の焼き貝",
    schedule: schedule.four,
    amount: 33,
    category: [category.marine.key, category.cooked.key],
  },
  1: {
    name: "アイルインクペースト",
    schedule: schedule.four,
    amount: 43,
    category: [category.marine.key, category.spice.key],
  },
  2: {
    name: "アイルコーラルリング",
    schedule: schedule.six,
    amount: 50,
    category: [category.marine.key, category.accessory.key],
  },
  3: {
    name: "アイルソルコット",
    schedule: schedule.six,
    amount: 64,
    category: [category.marine.key, category.food.key],
  },
  4: {
    name: "開拓工房の仙薬",
    schedule: schedule.six,
    amount: 64,
    category: [category.marine.key, category.chemical.key],
  },
  5: {
    name: "開拓工房のフィッシュパイ",
    schedule: schedule.six,
    amount: 93,
    category: [category.marine.key, category.snack.key],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.six,
    amount: 163,
    category: [category.marine.key, category.grocery.key],
  }
};
