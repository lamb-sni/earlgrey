import { schedule } from "../schedule";
import { categories } from "../categories";

export const armor = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 46,
    category: categories.armor.key,
    categories: [categories.armor.key, categories.metal.key],
  },
  1: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 79,
    category: categories.armor.key,
    categories: [categories.armor.key, categories.cloth.key],
  },
  2: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 89,
    category: categories.armor.key,
    categories: [categories.armor.key, categories.cloth.key],
  },
  3: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 132,
    category: categories.armor.key,
    categories: [categories.armor.key, categories.animal.key],
  },
  4: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 149,
    category: categories.armor.key,
    categories: [categories.armor.key, categories.wood.key],
  },
};
