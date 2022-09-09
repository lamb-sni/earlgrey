import { schedule } from "../schedule";
import { categories } from "../categories";

export const cloth = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 39,
    category: categories.cloth.key,
    categories: [categories.grocery.key, categories.cloth.key],
  },
  1: {
    name: "アイルリボン",
    schedule: schedule.six,
    amount: 59,
    category: categories.cloth.key,
    categories: [categories.accessory.key, categories.cloth.key],
  },
  2: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 79,
    category: categories.cloth.key,
    categories: [categories.armor.key, categories.cloth.key],
  },
  3: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 89,
    category: categories.cloth.key,
    categories: [categories.armor.key, categories.cloth.key],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 132,
    category: categories.cloth.key,
    categories: [categories.furnishing.key, categories.cloth.key],
  }
};
