import { schedule } from "../schedule";
import { category } from "../category";

export const metal = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 50,
    category: [category.armor.key, category.metal.key],
  },
  1: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    category: [category.grocery.key, category.metal.key],
  },
  2: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: [category.furnishing.key, category.metal.key],
  },
  3: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 86,
    category: [category.weapon.key, category.metal.key],
  },
  4: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 163,
    category: [category.accessory.key, category.metal.key],
  }
};
