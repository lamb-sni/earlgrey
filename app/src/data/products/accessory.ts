import { schedule } from "../schedule";
import { categories } from "../categories";

export const accessory = {
  0: {
    name: "アイルウッドネックレス",
    schedule: schedule.four,
    amount: 30,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.wood.key],
  },
  1: {
    name: "アイルファングイヤリング",
    schedule: schedule.four,
    amount: 48,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.animal.key],
  },
  2: {
    name: "アイルコーラルリング",
    schedule: schedule.six,
    amount: 46,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.marine.key],
  },
  3: {
    name: "アイルリボン",
    schedule: schedule.six,
    amount: 59,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.cloth.key],
  },
  4: {
    name: "アイルクォーツリング",
    schedule: schedule.eight,
    amount: 79,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.ceramic.key],
  },
  5: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 149,
    category: categories.accessory.key,
    categories: [categories.accessory.key, categories.metal.key],
  }
};
