import { schedule } from "../schedule";
import { categories } from "../categories";

export const food = {
  0: {
    name: "開拓工房のザワークラウト",
    schedule: schedule.four,
    amount: 48,
    categories: [categories.food.key],
  },
  1: {
    name: "開拓工房のコーンフレーク",
    schedule: schedule.four,
    amount: 62,
    categories: [categories.food.key],
  },
  2: {
    name: "アイルソルトコッド",
    schedule: schedule.six,
    amount: 64,
    categories: [categories.food.key, categories.marine.key],
  },
  3: {
    name: "開拓工房のラディッシュピクルス",
    schedule: schedule.eight,
    amount: 124,
    categories: [categories.food.key],
  },
};
