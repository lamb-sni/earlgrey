import { schedule } from "../schedule";
import { categories } from "../categories";

export const food = {
  0: {
    name: "開拓工房のザワークラウト",
    schedule: schedule.four,
    amount: 44,
    category: categories.food.key,
    categories: [categories.food.key],
  },
  1: {
    name: "開拓工房のコーンフレーク",
    schedule: schedule.four,
    amount: 57,
    category: categories.food.key,
    categories: [categories.food.key],
  },
  2: {
    name: "アイルソルトコッド",
    schedule: schedule.six,
    amount: 59,
    category: categories.food.key,
    categories: [categories.food.key, categories.marine.key],
  },
  3: {
    name: "開拓工房のラディッシュピクルス",
    schedule: schedule.eight,
    amount: 114,
    category: categories.food.key,
    categories: [categories.food.key],
  },
};
