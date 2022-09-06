import { schedule } from "../schedule";
import { category } from "../category";

export const ceramic = {
  0: {
    name: "開拓工房の火薬",
    schedule: schedule.four,
    amount: 33,
    category: [category.ceramic.key, category.chemical.key],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: [category.ceramic.key, category.furnishing.key],
  },
  2: {
    name: "アイルクォーツリング",
    schedule: schedule.eight,
    amount: 86,
    category: [category.ceramic.key, category.accessory.key],
  },
  3: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    category: [category.ceramic.key, category.grocery.key],
  },
  4: {
    name: "アイルガーネットレイピア",
    schedule: schedule.eight,
    amount: 163,
    category: [category.ceramic.key, category.weapon.key],
  }
};
