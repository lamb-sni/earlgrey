import { schedule } from "../schedule";
import { category } from "../category";

export const armor = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 50,
    category: [category.armor, category.metal],
  },
  1: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 86,
    category: [category.armor, category.cloth],
  },
  2: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 97,
    category: [category.armor, category.cloth],
  },
  3: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 144,
    category: [category.armor, category.animal],
  },
  4: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 163,
    category: [category.armor, category.wood],
  },
};
