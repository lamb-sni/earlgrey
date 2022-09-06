import { schedule } from "./schedule";
import { category } from "./category";

export const grocery = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 43,
    type: [category.grocery, category.cloth],
    bonus: [],
  },
  1: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 52,
    type: [category.grocery, category.animal],
    bonus: [],
  },
  2: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    type: [category.grocery, category.wood],
    bonus: [],
  },
  3: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 97,
    type: [category.grocery, category.animal],
    bonus: [],
  },
  4: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    type: [category.grocery, category.metal],
    bonus: [],
  },
  5: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    type: [category.grocery, category.ceramic],
    bonus: [],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.eight,
    amount: 163,
    type: [category.grocery, category.marine],
    bonus: [],
  },
};
