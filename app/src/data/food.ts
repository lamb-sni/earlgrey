import { schedule } from "./schedule";
import { category } from "./category";

export const food = {
  0: {
    id: 0,
    name: "開拓工房のザワークラウト",
    schedule: schedule.four,
    amount: 48,
    type: [category.food],
  },
  1: {
    id: 1,
    name: "開拓工房のコーンフレーク",
    schedule: schedule.four,
    amount: 62,
    type: [category.food]
  },
  2: {
    id: 2,
    name: "アイルソルコット",
    schedule: schedule.six,
    amount: 64,
    type: [category.food, category.marine]
  },
  3: {
    id: 3,
    name: "開拓工房のラディッシュピクルス	",
    schedule: schedule.eight,
    amount: 124,
    type: [category.food]
  },
};

export const bonus = {
  0: [food[1], food[2], food[3]],
  1: [food[0], food[2], food[3]],
  2: [food[0], food[1], food[3]],
  3: [food[0], food[1], food[2]],
};
