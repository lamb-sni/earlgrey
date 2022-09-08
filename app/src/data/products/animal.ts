import { schedule } from "../schedule";
import { categories } from "../categories";

export const animal = {
  0: {
    name: "アイルクリナリーナイフ",
    schedule: schedule.four,
    amount: 43,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.grocery.key],
  },
  1: {
    name: "開拓工房のボイルドエッグ",
    schedule: schedule.four,
    amount: 52,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.cooked.key],
  },
  2: {
    name: "アイルファングイヤリング",
    schedule: schedule.four,
    amount: 52,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.accessory.key],
  },
  3: {
    name: "開拓工房のバター",
    schedule: schedule.four,
    amount: 97,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.spice.key],
  },
  4: {
    name: "アイルホラ",
    schedule: schedule.six,
    amount: 108,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.weapon.key],
  },
  5: {
    name: "アイルホルン",
    schedule: schedule.six,
    amount: 86,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.grocery.key],
  },
  6: {
    name: "アイルシープラグ",
    schedule: schedule.six,
    amount: 163,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.furnishing.key],
  },
  7: {
    name: "アイルスケイルフィンガー",
    schedule: schedule.eight,
    amount: 163,
    category: categories.animal.key,
    categories: [categories.animal.key, categories.armor.key],
  },
};
