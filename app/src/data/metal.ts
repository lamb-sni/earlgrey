import { schedule } from "./schedule";
import { category } from "./category";

export const chemical = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 50,
    category: [category.armor, category.metal],
  },
  1: {
    name: "アイルガーデンサイズ",
    schedule: schedule.six,
    amount: 108,
    category: [category.grocery, category.metal],
  },
  2: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: [category.furnishing, category.metal],
  },
  3: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 86,
    category: [category.weapon, category.metal],
  },
  4: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 163,
    category: [category.accessory, category.metal],
  }
};
