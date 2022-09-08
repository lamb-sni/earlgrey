import { schedule } from "../schedule";
import { categories } from "../categories";

export const metal = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 50,
    category: categories.metal.key,
    categories: [categories.armor.key, categories.metal.key],
  },
  1: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    category: categories.metal.key,
    categories: [categories.grocery.key, categories.metal.key],
  },
  2: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: categories.metal.key,
    categories: [categories.furnishing.key, categories.metal.key],
  },
  3: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 86,
    category: categories.metal.key,
    categories: [categories.weapon.key, categories.metal.key],
  },
  4: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 163,
    category: categories.metal.key,
    categories: [categories.accessory.key, categories.metal.key],
  }
};
