import { atom } from "recoil"
import { CategoriesKey } from "../data/categories";
import { schedule } from "../data/schedule";

export const selectedCategoryAtom = atom({
  key: "selectedCategoryAtom",
  default: "" as CategoriesKey
});

export const selectedProductDetailAtom = atom({
  key: "selectedProductDetailAtom",
  default: {
    name: "",
    schedule: schedule.four,
    amount: 0,
    categories: [""],
  }
});
