import * as React from "react";
import { useRecoilValue } from "recoil"
import { selectedProductDetailAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const RelationProduct = () => {
  const detail = useRecoilValue(selectedProductDetailAtom);
  if (!detail.name) {
    return <p className={style.empty}>島産品を選択するとあわせて生産ボーナスの対象が表示されます</p>;;
  }
  const relationCategories = detail.categories;
  const relationProducts = relationCategories.map(v => {
    return products[v as ProductsKey];
  });
  const relationProductsArr = relationProducts.map(d => {
    return Object.values(d).map(v => {
      return {
        name: v.name,
        schedule: v.schedule
      };
    });
  })
  .flatMap(v => v)
  .filter(v => v.name !== detail.name);
  const tagData = relationProductsArr.map(d => {
    return {
      value: d.name,
      label: `${d.name}（${d.schedule.label}）`
    };
  });

  return (
    <div>
      <p className={style.heading}>あわせて生産ボーナスの対象となる島産品：</p>
      <Tag data={tagData} onClick={() => {}} />
    </div>
  );
};

export default RelationProduct;
