import { schedule } from "../schedule";
import { categories } from "../categories";

export const grocery = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 39,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.cloth.key],
  },
  1: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 48,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.animal.key],
  },
  2: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 48,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.wood.key],
  },
  3: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 89,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.animal.key],
  },
  4: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 99,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.metal.key],
  },
  5: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 79,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.ceramic.key],
  },
  6: {
    name: "開拓工房のシャークオイル",
    schedule: schedule.eight,
    amount: 149,
    category: categories.grocery.key,
    categories: [categories.grocery.key, categories.marine.key],
  },
};
