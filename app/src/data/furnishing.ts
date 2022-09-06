import { schedule } from "./schedule";
import { category } from "./category";

export const furnishing = {
  0: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: [category.furnishing, category.wood],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: [category.furnishing, category.ceramic],
  },
  2: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 108,
    category: [category.furnishing, category.animal],
  },
  3: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: [category.furnishing, category.metal],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 144,
    category: [category.furnishing, category.cloth],
  }
};
