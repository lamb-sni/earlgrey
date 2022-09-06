import { schedule } from "./schedule";

export const category = {
  food: "保存食",
  armor: "防具",
  coocked: "料理",
  snack: "菓子",
  grocery: "日用品",
  furnishing: "調度品",
  weapon: "武器",
  chemical: "薬品",
  spice: "調味料",
  accessory: "アクセサリ",
  metal: "金属製品",
  wood: "木工製品",
  cloth: "布製品",
  animal: "動物製品",
  marine: "海産製品",
  ceramic: "窯業製品"
};

export const food = {
  0: {
    id: 0,
    name: "開拓工房のザワークラウト",
    schedule: schedule.four,
    amount: 48,
    type: category.food
  }
};
