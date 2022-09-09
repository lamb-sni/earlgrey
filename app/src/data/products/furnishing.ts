import { schedule } from "../schedule";
import { categories } from "../categories";

export const furnishing = {
  0: {
    name: "アイルウッドチェア",
    schedule: schedule.six,
    amount: 46,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.wood.key],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 52,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.ceramic.key],
  },
  2: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 99,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.animal.key],
  },
  3: {
    name: "シープのブロンズ像",
    schedule: schedule.eight,
    amount: 70,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.metal.key],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 132,
    category: categories.furnishing.key,
    categories: [categories.furnishing.key, categories.cloth.key],
  }
};
