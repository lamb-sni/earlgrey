import { schedule } from "./schedule";
import { category } from "./category";

export const food = {
  0: {
    name: "開拓工房のザワークラウト",
    schedule: schedule.four,
    amount: 48,
    type: [category.food],
    bonus: [],
  },
  1: {
    name: "開拓工房のコーンフレーク",
    schedule: schedule.four,
    amount: 62,
    type: [category.food],
    bonus: [],
  },
  2: {
    name: "アイルソルコット",
    schedule: schedule.six,
    amount: 64,
    type: [category.food, category.marine],
    bonus: [],
  },
  3: {
    name: "開拓工房のラディッシュピクルス	",
    schedule: schedule.eight,
    amount: 124,
    type: [category.food],
    bonus: [],
  },
};
