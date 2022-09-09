import { schedule } from "../schedule";
import { categories } from "../categories";

export const chemical = {
  0: {
    name: "アイルポーション",
    schedule: schedule.four,
    amount: 30,
    category: categories.chemical.key,
    categories: [categories.chemical.key],
  },
  1: {
    name: "開拓工房の火薬",
    schedule: schedule.four,
    amount: 30,
    category: categories.chemical.key,
    categories: [categories.chemical.key, categories.ceramic.key],
  },
  2: {
    name: "開拓工房の仙薬",
    schedule: schedule.six,
    amount: 59,
    category: categories.chemical.key,
    categories: [categories.chemical.key, categories.marine.key],
  },
  3: {
    name: "開拓工房の野菜ジュース",
    schedule: schedule.six,
    amount: 85,
    category: categories.chemical.key,
    categories: [categories.chemical.key],
  },
  4: {
    name: "開拓工房のグロースフォーミュラ",
    schedule: schedule.eight,
    amount: 149,
    category: categories.chemical.key,
    categories: [categories.chemical.key],
  }
};
