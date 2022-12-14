import * as React from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import ClassNames from "classnames";
import {
  selectedProductDetailAtom,
  selectedCategoryAtom,
  selectedProductsAtom,
  isOpenDrawerAtom
} from "../../../state/atom";
import { products, ProductsKey, getProductForScheduleByName } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import { PopularityKey } from "../../../data/popularity";
import { DemandKey } from "../../../data/demand";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const RelationProduct = () => {
  const [detail, setDetail] = useRecoilState(selectedProductDetailAtom);
  const [addedProducts, setAddedProducts] = useRecoilState(selectedProductsAtom);
  const setSelectedCategory = useSetRecoilState(selectedCategoryAtom);
  const isOpenDrawer = useRecoilValue(isOpenDrawerAtom);
  if (!detail.name) {
    return <p className={style.empty}>島産品を選択するとあわせて生産ボーナスの対象が表示されます</p>;
  }

  const relationCategories = detail.categories;
  const relationProducts = relationCategories.map(v => {
    return products[v as ProductsKey];
  });
  const relationProductsArr = Array.from(new Set(relationProducts.map(d => {
    return Object.values(d).map(v => {
      return {
        name: v.name,
        schedule: v.schedule
      };
    });
  })
  .flatMap(v => v)
  .filter(v => v.name !== detail.name)));
  const tagData = relationProductsArr.map(d => {
    return {
      value: d.name,
      label: `${d.name}（${d.schedule.label}）`
    };
  });

  return (
    <div className={ClassNames(style.wrapper, { [style.isOpenDrawer]: isOpenDrawer })}>
      <p className={style.heading}>あわせて生産ボーナスの対象となる島産品：</p>
      <Tag
        data={tagData}
        onClick={v => {
          relationProducts.map(o => {
            Object.values(o).map(d => {
              if (d.name === v) {
                setDetail(d);
                setSelectedCategory(d.category as CategoriesKey);
              }
              return null;
            });
            return null;
          });

          const obj = getProductForScheduleByName(v);
          if (!obj) {
            return;
          }
          setAddedProducts(addedProducts.concat([{
            ...obj,
            popularity: "usually" as PopularityKey,
            demand: "usually" as DemandKey,
            isBonus: false
          }]));
        }}
      />
    </div>
  );
};

export default RelationProduct;
