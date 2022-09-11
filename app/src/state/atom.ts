import { atom } from "recoil"
import { CategoriesKey } from "../data/categories";
import { PopularityKey } from "../data/popularity";
import { DemandKey } from "../data/demand";
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

export const selectedProductsAtom = atom({
  key: "selectedProductsAtom",
  default: [{
    name: "",
    schedule: schedule.four,
    amount: 0,
    categories: [""],
    popularity: "usually" as PopularityKey,
    demand: "usually" as DemandKey
  }]
});
