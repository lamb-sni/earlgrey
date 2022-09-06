import { schedule } from "../schedule";
import { category } from "../category";

export const grocery = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 43,
    category: [category.grocery.key, category.cloth.key],
  },
  1: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 52,
    category: [category.grocery.key, category.animal.key],
  },
  2: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    category: [category.grocery.key, category.wood.key],
  },
  3: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 97,
    category: [category.grocery.key, category.animal.key],
  },
  4: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    category: [category.grocery.key, category.metal.key],
  },
  5: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    category: [category.grocery.key, category.ceramic.key],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.eight,
    amount: 163,
    category: [category.grocery.key, category.marine.key],
  },
};
