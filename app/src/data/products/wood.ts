import { schedule } from "../schedule";
import { categories } from "../categories";

export const wood = {
  0: {
    name: "アイルウッドネックレス",
    schedule: schedule.four,
    amount: 33,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.accessory.key],
  },
  1: {
    name: "アイルブラシ",
    schedule: schedule.four,
    amount: 52,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.grocery.key],
  },
  2: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.furnishing.key],
  },
  3: {
    name: "アイルマクアフティル",
    schedule: schedule.six,
    amount: 50,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.weapon.key],
  },
  4: {
    name: "アイルクルーク",
    schedule: schedule.eight,
    amount: 144,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.weapon.key],
  },
  5: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 163,
    category: categories.wood.key,
    categories: [categories.wood.key, categories.armor.key],
  }
};
