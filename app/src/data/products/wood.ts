import { schedule } from "../schedule";
import { category } from "../category";

export const wood = {
  0: {
    name: "アイルウッドネックレス",
    schedule: schedule.four,
    amount: 33,
    category: [category.wood.key, category.accessory.key],
  },
  1: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    category: [category.wood.key, category.grocery.key],
  },
  2: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: [category.wood.key, category.furnishing.key],
  },
  3: {
    name: "アイルマクアフティル",
    schedule: schedule.six,
    amount: 50,
    category: [category.wood.key, category.weapon.key],
  },
  4: {
    name: "アイルクルーク",
    schedule: schedule.eight,
    amount: 144,
    category: [category.wood.key, category.weapon.key],
  },
  5: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 163,
    category: [category.wood.key, category.armor.key],
  }
};
