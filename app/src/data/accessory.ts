import { schedule } from "./schedule";
import { category } from "./category";

export const accessory = {
  0: {
    name: "アイルウッドネックレス",
    schedule: schedule.four,
    amount: 33,
    category: [category.accessory, category.wood],
  },
  1: {
    name: "アイルファングイヤリング",
    schedule: schedule.four,
    amount: 52,
    category: [category.accessory, category.animal],
  },
  2: {
    name: "アイルコーラルリング",
    schedule: schedule.six,
    amount: 50,
    category: [category.accessory, category.marine],
  },
  3: {
    name: "アイルリボン",
    schedule: schedule.six,
    amount: 64,
    category: [category.accessory, category.cloth],
  },
  4: {
    name: "アイルクォーツリング",
    schedule: schedule.eight,
    amount: 86,
    category: [category.accessory, category.ceramic],
  },
  5: {
    name: "アイルシルバーイヤーカフ",
    schedule: schedule.eight,
    amount: 163,
    category: [category.accessory, category.metal],
  }
};
