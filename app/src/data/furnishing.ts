import { schedule } from "./schedule";
import { category } from "./category";

export const furnishing = {
  0: {
    name: "アイルウッドチェア",
    schedule: schedule.four,
    amount: 50,
    category: [category.furnishing, category.wood],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.four,
    amount: 57,
    category: [category.furnishing, category.ceramic],
  },
  2: {
    name: "アイルシープラグ",
    schedule: schedule.four,
    amount: 108,
    category: [category.furnishing, category.animal],
  },
  3: {
    name: "シープのブロンズ像",
    schedule: schedule.six,
    amount: 76,
    category: [category.furnishing, category.metal],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.six,
    amount: 144,
    category: [category.furnishing, category.cloth],
  }
};
