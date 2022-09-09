import { accessory } from "./products/accessory";
import { animal } from "./products/animal";
import { armor } from "./products/armor";
import { ceramic } from "./products/ceramic";
import { chemical } from "./products/chemical";
import { cloth } from "./products/cloth";
import { cooked } from "./products/cooked";
import { food } from "./products/food";
import { furnishing } from "./products/furnishing";
import { grocery } from "./products/grocery";
import { marine } from "./products/marine";
import { metal } from "./products/metal";
import { snack } from "./products/snack";
import { spice } from "./products/spice";
import { weapon } from "./products/weapon";
import { wood } from "./products/wood";

export const products = {
  accessory,
  animal,
  armor,
  ceramic,
  chemical,
  cloth,
  cooked,
  food,
  furnishing,
  grocery,
  marine,
  metal,
  snack,
  spice,
  weapon,
  wood
};

export type ProductsKey = keyof typeof products;

export const getProductForScheduleByName = (name: string) => {
  return Object.values(products).map(o => {
    return Object.values(o).map(d => {
      if (d.name === name) {
        return {
          name: d.name,
          amount: d.amount,
          schedule: d.schedule,
          categories: d.categories
        };
      }
      return null;
    });
  })
  .flatMap(v => v)
  .filter(v => v)[0];
};
