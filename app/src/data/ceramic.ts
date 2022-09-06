import { schedule } from "./schedule";
import { category } from "./category";

export const ceramic = {
  0: {
    name: "開拓工房の火薬",
    schedule: schedule.four,
    amount: 33,
    category: [category.ceramic, category.chemical],
  },
  1: {
    name: "アイルブリックカウンター",
    schedule: schedule.six,
    amount: 57,
    category: [category.ceramic, category.furnishing],
  },
  2: {
    name: "アイルクォーツリング",
    schedule: schedule.eight,
    amount: 86,
    category: [category.ceramic, category.accessory],
  },
  3: {
    name: "開拓工房の磁器壺",
    schedule: schedule.eight,
    amount: 86,
    category: [category.ceramic, category.grocery],
  },
  4: {
    name: "アイルガーネットレイピア",
    schedule: schedule.eight,
    amount: 163,
    category: [category.ceramic, category.weapon],
  }
};
