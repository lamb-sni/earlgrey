import { schedule } from "../schedule";
import { category } from "../category";

export const furnishing = {
  0: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: [category.furnishing.key, category.wood.key],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: [category.furnishing.key, category.ceramic.key],
  },
  2: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 108,
    category: [category.furnishing.key, category.animal.key],
  },
  3: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: [category.furnishing.key, category.metal.key],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 144,
    category: [category.furnishing.key, category.cloth.key],
  }
};
