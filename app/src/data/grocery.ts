import { schedule } from "./schedule";
import { category } from "./category";

export const grocery = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 43,
    category: [category.grocery, category.cloth],
  },
  1: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 52,
    category: [category.grocery, category.animal],
  },
  2: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    category: [category.grocery, category.wood],
  },
  3: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 97,
    category: [category.grocery, category.animal],
  },
  4: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    category: [category.grocery, category.metal],
  },
  5: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    category: [category.grocery, category.ceramic],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.eight,
    amount: 163,
    category: [category.grocery, category.marine],
  },
};
