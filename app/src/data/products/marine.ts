import { schedule } from "../schedule";
import { categories } from "../categories";

export const marine = {
  0: {
    name: "開拓工房の焼き貝",
    schedule: schedule.four,
    amount: 30,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.cooked.key],
  },
  1: {
    name: "アイルインクペースト",
    schedule: schedule.four,
    amount: 39,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.spice.key],
  },
  2: {
    name: "アイルコーラルリング",
    schedule: schedule.six,
    amount: 46,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.accessory.key],
  },
  3: {
    name: "アイルソルトコッド",
    schedule: schedule.six,
    amount: 59,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.food.key],
  },
  4: {
    name: "開拓工房の仙薬",
    schedule: schedule.six,
    amount: 59,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.chemical.key],
  },
  5: {
    name: "開拓工房のフィッシュパイ",
    schedule: schedule.six,
    amount: 85,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.snack.key],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.six,
    amount: 149,
    category: categories.marine.key,
    categories: [categories.marine.key, categories.grocery.key],
  }
};
