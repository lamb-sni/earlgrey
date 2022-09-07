import * as React from 'react';
import { useRecoilValue } from "recoil"
import { selectedProductDetailAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import Tag from '../../../component/Tag';

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
      <p>あわせて生産ボーナスの対象となる島産品：</p>
      <Tag data={tagData} onClick={() => {}} />
    </div>
  );
};

export default RelationProduct;
