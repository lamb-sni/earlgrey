import { schedule } from "../schedule";
import { category } from "../category";

export const snack = {
  0: {
    name: "開拓工房のスイートポテト",
    schedule: schedule.six,
    amount: 86,
    category: [category.snack.key],
  },
  1: {
    name: "開拓工房のフィッシュパイ",
    schedule: schedule.six,
    amount: 93,
    category: [category.snack.key, category.marine.key],
  },
  2: {
    name: "開拓工房のパンプキンプディング",
    schedule: schedule.six,
    amount: 93,
    category: [category.snack.key],
  },
  3: {
    name: "開拓工房のキャラメル",
    schedule: schedule.six,
    amount: 97,
    category: [category.snack.key],
  },
};
