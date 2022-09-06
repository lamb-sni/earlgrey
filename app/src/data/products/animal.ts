import { schedule } from "../schedule";
import { category } from "../category";

export const animal = {
  0: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 43,
    category: [category.animal, category.grocery],
  },
  1: {
    name: "開拓工房のボイルドエッグ",
    schedule: schedule.four,
    amount: 52,
    category: [category.animal, category.cooked],
  },
  2: {
    name: "アイルファングイヤリング",
    schedule: schedule.four,
    amount: 52,
    category: [category.animal, category.accessory],
  },
  3: {
    name: "開拓工房のバター",
    schedule: schedule.four,
    amount: 97,
    category: [category.animal, category.spice],
  },
  4: {
    name: "アイルホラ",
    schedule: schedule.six,
    amount: 108,
    category: [category.animal, category.weapon],
  },
  5: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 86,
    category: [category.animal, category.grocery],
  },
  6: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 163,
    category: [category.animal, category.furnishing],
  },
  7: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 163,
    category: [category.animal, category.armor],
  },
};
