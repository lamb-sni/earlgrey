import { schedule } from "../schedule";
import { categories } from "../categories";

export const ceramic = {
  0: {
    name: "開拓工房の火薬",
    schedule: schedule.four,
    amount: 33,
    category: categories.ceramic.key,
    categories: [categories.ceramic.key, categories.chemical.key],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: categories.ceramic.key,
    categories: [categories.ceramic.key, categories.furnishing.key],
  },
  2: {
    name: "アイルクォーツリング",
    schedule: schedule.eight,
    amount: 86,
    category: categories.ceramic.key,
    categories: [categories.ceramic.key, categories.accessory.key],
  },
  3: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    category: categories.ceramic.key,
    categories: [categories.ceramic.key, categories.grocery.key],
  },
  4: {
    name: "アイルガーネットレイピア",
    schedule: schedule.eight,
    amount: 163,
    category: categories.ceramic.key,
    categories: [categories.ceramic.key, categories.weapon.key],
  }
};
