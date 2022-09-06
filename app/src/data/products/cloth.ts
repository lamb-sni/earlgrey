import { schedule } from "../schedule";
import { category } from "../category";

export const cloth = {
  0: {
    name: "アイルロープ",
    schedule: schedule.four,
    amount: 43,
    category: [category.grocery, category.cloth],
  },
  1: {
    name: "アイルリボン",
    schedule: schedule.six,
    amount: 64,
    category: [category.accessory, category.cloth],
  },
  2: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 86,
    category: [category.armor, category.cloth],
  },
  3: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 97,
    category: [category.armor, category.cloth],
  },
  4: {
    name: "アイルベッド",
    schedule: schedule.eight,
    amount: 144,
    category: [category.furnishing, category.cloth],
  }
};
