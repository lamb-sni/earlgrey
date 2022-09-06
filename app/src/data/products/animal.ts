import { schedule } from "../schedule";
import { category } from "../category";

export const animal = {
  0: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 43,
    category: [category.animal.key, category.grocery.key],
  },
  1: {
    name: "開拓工房のボイルドエッグ",
    schedule: schedule.four,
    amount: 52,
    category: [category.animal.key, category.cooked.key],
  },
  2: {
    name: "アイルファングイヤリング",
    schedule: schedule.four,
    amount: 52,
    category: [category.animal.key, category.accessory.key],
  },
  3: {
    name: "開拓工房のバター",
    schedule: schedule.four,
    amount: 97,
    category: [category.animal.key, category.spice.key],
  },
  4: {
    name: "アイルホラ",
    schedule: schedule.six,
    amount: 108,
    category: [category.animal.key, category.weapon.key],
  },
  5: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 86,
    category: [category.animal.key, category.grocery.key],
  },
  6: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 163,
    category: [category.animal.key, category.furnishing.key],
  },
  7: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 163,
    category: [category.animal.key, category.armor.key],
  },
};
