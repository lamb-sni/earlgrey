import * as React from 'react';
import { useRecoilValue } from "recoil"
import { selectedProductDetailAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";

const RelationProduct = () => {
  const detail = useRecoilValue(selectedProductDetailAtom);
  if (!detail.name) {
    return <p>島産品が選択されていません</p>;;
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
  }).flatMap(v => v).filter(v => v.name !== detail.name);

  return (
    <>
      <p>あわせて生産ボーナスの対象となる島産品：</p>
      <ul>
        {relationProductsArr.map(d => {
          return (
            <li key={d.name}>{d.name}（{d.schedule.label}）</li>
          );
        })}
      </ul>
    </>
  );
};

export default RelationProduct;
