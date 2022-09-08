import { schedule } from "../schedule";
import { categories } from "../categories";

export const weapon = {
  0: {
    name: "アイルマクアフティル",
    schedule: schedule.six,
    amount: 50,
    category: categories.weapon.key,
    categories: [categories.weapon.key, categories.wood.key],
  },
  1: {
    name: "アイルホラ",
    schedule: schedule.six,
    amount: 86,
    category: categories.weapon.key,
    categories: [categories.weapon.key, categories.animal.key],
  },
  2: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 86,
    category: categories.weapon.key,
    categories: [categories.weapon.key, categories.metal.key],
  },
  3: {
    name: "アイルクルーク",
    schedule: schedule.eight,
    amount: 144,
    category: categories.weapon.key,
    categories: [categories.weapon.key, categories.wood.key],
  },
  4: {
    name: "アイルガーネットレイピア",
    schedule: schedule.eight,
    amount: 163,
    category: categories.weapon.key,
    categories: [categories.weapon.key, categories.ceramic.key],
  }
};
