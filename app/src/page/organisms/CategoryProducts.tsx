import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from "recoil"
import { selectedCategoryAtom, selectedProductDetailAtom } from "../../state/atom";
import { categories } from '../../data/categories';
import { products } from "../../data";
import Select from "../../component/Select";

const CategoryProducts = () => {
  const selectedCategory = useRecoilValue(selectedCategoryAtom);
  const setSelectedProductDetail = useSetRecoilState(selectedProductDetailAtom);

  if (!selectedCategory) {
    return <p>カテゴリが選択されていません</p>;
  }
  const category = categories[selectedCategory];
  const label = category.label;
  const product = products[selectedCategory];
  const selectData = Object.values(product).map(d => {
    return {
      value: d.name,
      label: `${d.name}（${d.schedule.label}）`
    }
  });

  return (
    <>
      <p>選択中のカテゴリ：{label}</p>
      <ul>
        <Select
          data={selectData}
          onClick={v => {
            Object.values(product).map(d => {
              if (d.name === v) {
                setSelectedProductDetail(d);
              }
              return null;
            });
          }}
        />
      </ul>
    </>
  );
};

export default CategoryProducts;
