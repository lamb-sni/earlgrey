import { schedule } from "../schedule";
import { categories } from "../categories";

export const metal = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 46,
    category: categories.metal.key,
    categories: [categories.armor.key, categories.metal.key],
  },
  1: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 99,
    category: categories.metal.key,
    categories: [categories.grocery.key, categories.metal.key],
  },
  2: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 70,
    category: categories.metal.key,
    categories: [categories.furnishing.key, categories.metal.key],
  },
  3: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 79,
    category: categories.metal.key,
    categories: [categories.weapon.key, categories.metal.key],
  },
  4: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 149,
    category: categories.metal.key,
    categories: [categories.accessory.key, categories.metal.key],
  }
};
