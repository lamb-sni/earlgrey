import { schedule } from "./schedule";
import { category } from "./category";

export const chemical = {
  0: {
    name: "アイルポーション",
    schedule: schedule.four,
    amount: 33,
    category: [category.chemical],
  },
  1: {
    name: "開拓工房の火薬",
    schedule: schedule.four,
    amount: 33,
    category: [category.chemical, category.ceramic],
  },
  2: {
    name: "開拓工房の仙薬",
    schedule: schedule.six,
    amount: 64,
    category: [category.chemical, category.marine],
  },
  3: {
    name: "開拓工房の野菜ジュース",
    schedule: schedule.six,
    amount: 93,
    category: [category.chemical],
  },
  4: {
    name: "開拓工房のグロースフォーミュラ",
    schedule: schedule.eight,
    amount: 163,
    category: [category.chemical],
  }
};
