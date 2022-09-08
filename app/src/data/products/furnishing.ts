import { schedule } from "../schedule";
import { categories } from "../categories";

export const furnishing = {
  0: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 50,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.wood.key],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.ceramic.key],
  },
  2: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 108,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.animal.key],
  },
  3: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 76,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.metal.key],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 144,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.cloth.key],
  }
};
