import { schedule } from "./schedule";
import { category } from "./category";

export const spice = {
  0: {
    name: "アイルインクペースト",
    schedule: schedule.four,
    amount: 43,
    category: [category.spice, category.marine],
  },
  1: {
    name: "開拓工房のバター",
    schedule: schedule.four,
    amount: 52,
    category: [category.spice, category.animal],
  },
  2: {
    name: "アイルトマトケチャップ",
    schedule: schedule.four,
    amount: 62,
    category: [category.spice],
  },
  3: {
    name: "アイルベリージャム",
    schedule: schedule.six,
    amount: 93,
    category: [category.spice],
  }
};
