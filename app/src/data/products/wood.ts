import { schedule } from "../schedule";
import { category } from "../category";

export const wood = {
  0: {
    name: "アイルウッドネックレス",
    schedule: schedule.four,
    amount: 33,
    category: [category.wood, category.accessory],
  },
  1: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    category: [category.wood, category.grocery],
  },
  2: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: [category.wood, category.furnishing],
  },
  3: {
    name: "アイルマクアフティル",
    schedule: schedule.six,
    amount: 50,
    category: [category.wood, category.weapon],
  },
  4: {
    name: "アイルクルーク",
    schedule: schedule.eight,
    amount: 144,
    category: [category.wood, category.weapon],
  },
  5: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 163,
    category: [category.wood, category.armor],
  }
};
