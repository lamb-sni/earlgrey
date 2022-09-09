import { schedule } from "../schedule";
import { categories } from "../categories";

export const snack = {
  0: {
    name: "開拓工房のスイートポポト",
    schedule: schedule.six,
    amount: 79,
    category: categories.snack.key,
    categories: [categories.snack.key],
  },
  1: {
    name: "開拓工房のフィッシュパイ",
    schedule: schedule.six,
    amount: 85,
    category: categories.snack.key,
    categories: [categories.snack.key, categories.marine.key],
  },
  2: {
    name: "開拓工房のパンプキンプディング",
    schedule: schedule.six,
    amount: 85,
    category: categories.snack.key,
    categories: [categories.snack.key],
  },
  3: {
    name: "開拓工房のキャラメル",
    schedule: schedule.six,
    amount: 89,
    category: categories.snack.key,
    categories: [categories.snack.key],
  },
};
