import { schedule } from "./schedule";
import { category } from "./category";

export const weapon = {
  0: {
    name: "アイルマクアフティル",
    schedule: schedule.six,
    amount: 50,
    category: [category.weapon, category.wood],
  },
  1: {
    name: "アイルホラ",
    schedule: schedule.six,
    amount: 86,
    category: [category.weapon, category.animal],
  },
  2: {
    name: "アイルアイアンアクス",
    schedule: schedule.eight,
    amount: 86,
    category: [category.weapon, category.metal],
  },
  3: {
    name: "アイルクルーク",
    schedule: schedule.eight,
    amount: 144,
    category: [category.weapon, category.wood],
  },
  4: {
    name: "アイルガーネットレイピア",
    schedule: schedule.eight,
    amount: 163,
    category: [category.weapon, category.ceramic],
  }
};
