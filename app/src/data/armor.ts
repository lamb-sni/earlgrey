import { schedule } from "./schedule";
import { category } from "./category";

export const food = {
  0: {
    name: "アイルバルビュート",
    schedule: schedule.six,
    amount: 50,
    type: [category.armor, category.metal],
    bonus: [],
  },
  1: {
    name: "アイルチュニック",
    schedule: schedule.six,
    amount: 86,
    type: [category.armor, category.cloth],
    bonus: [],
  },
  2: {
    name: "アイルキャバリエハット",
    schedule: schedule.six,
    amount: 97,
    type: [category.armor, category.cloth],
    bonus: [],
  },
  3: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 144,
    type: [category.armor, category.animal],
    bonus: [],
  },
  4: {
    name: "アイルスプルースシールド",
    schedule: schedule.eight,
    amount: 163,
    type: [category.armor, category.wood],
    bonus: [],
  },
};
