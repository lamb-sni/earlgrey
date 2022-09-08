import { schedule } from "../schedule";
import { categories } from "../categories";

export const spice = {
  0: {
    name: "アイルインクペースト",
    schedule: schedule.four,
    amount: 43,
    category: categories.spice.key,
    categories: [categories.spice.key, categories.marine.key],
  },
  1: {
    name: "開拓工房のバター",
    schedule: schedule.four,
    amount: 52,
    category: categories.spice.key,
    categories: [categories.spice.key, categories.animal.key],
  },
  2: {
    name: "アイルトマトケチャップ",
    schedule: schedule.four,
    amount: 62,
    category: categories.spice.key,
    categories: [categories.spice.key],
  },
  3: {
    name: "アイルベリージャム",
    schedule: schedule.six,
    amount: 93,
    category: categories.spice.key,
    categories: [categories.spice.key],
  }
};
