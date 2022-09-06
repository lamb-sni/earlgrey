import { schedule } from "../schedule";
import { categories } from "../categories";

export const cloth = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 43,
    categories: [categories.grocery.key, categories.cloth.key],
  },
  1: {
    name: "アイルリボン",
    schedule: schedule.six,
    amount: 64,
    categories: [categories.accessory.key, categories.cloth.key],
  },
  2: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 86,
    categories: [categories.armor.key, categories.cloth.key],
  },
  3: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 97,
    categories: [categories.armor.key, categories.cloth.key],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 144,
    categories: [categories.furnishing.key, categories.cloth.key],
  }
};
