import { schedule } from "../schedule";
import { categories } from "../categories";

export const cooked = {
  0: {
    name: "開拓工房の焼き貝",
    schedule: schedule.four,
    amount: 30,
    category: categories.cooked.key,
    categories: [categories.cooked.key, categories.marine.key],
  },
  1: {
    name: "開拓工房の焼きパンプキン",
    schedule: schedule.four,
    amount: 44,
    category: categories.cooked.key,
    categories: [categories.cooked.key],
  },
  2: {
    name: "開拓工房のボイルドエッグ",
    schedule: schedule.four,
    amount: 48,
    category: categories.cooked.key,
    categories: [categories.cooked.key, categories.animal.key],
  },
  3: {
    name: "開拓工房のパースニップサラダ",
    schedule: schedule.four,
    amount: 52,
    category: categories.cooked.key,
    categories: [categories.cooked.key],
  },
  4: {
    name: "開拓工房のオニオンスープ",
    schedule: schedule.six,
    amount: 85,
    category: categories.cooked.key,
    categories: [categories.cooked.key],
  },
};
