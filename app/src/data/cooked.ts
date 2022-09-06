import { schedule } from "./schedule";
import { category } from "./category";

export const cooked = {
  0: {
    name: "開拓工房の焼き貝",
    schedule: schedule.four,
    amount: 33,
    category: [category.cooked, category.marine],
  },
  1: {
    name: "開拓工房の焼きパンプキン",
    schedule: schedule.four,
    amount: 48,
    category: [category.cooked],
  },
  2: {
    name: "開拓工房のボイルドエッグ",
    schedule: schedule.four,
    amount: 52,
    category: [category.cooked, category.animal],
  },
  3: {
    name: "開拓工房のパースニップサラダ",
    schedule: schedule.four,
    amount: 57,
    category: [category.cooked],
  },
  4: {
    name: "開拓工房のオニオンスープ",
    schedule: schedule.six,
    amount: 93,
    category: [category.cooked],
  },
};
