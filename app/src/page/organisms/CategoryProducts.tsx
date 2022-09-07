import * as React from 'react';
import { useSetRecoilState, useRecoilValue } from "recoil"
import { selectedCategoryAtom, selectedProductDetailAtom } from "../../state/indexAtom";
import { categories } from '../../data/categories';
import { products } from "../../data";

const CategoryProducts = () => {
  const selectedCategory = useRecoilValue(selectedCategoryAtom);
  const setSelectedProductDetail = useSetRecoilState(selectedProductDetailAtom);

  if (!selectedCategory) {
    return <p>カテゴリが選択されていません</p>;
  }
  const category = categories[selectedCategory];
  const label = category.label;
  const product = products[selectedCategory];

  return (
    <>
      <p>選択中のカテゴリ：{label}</p>
      <ul>
        {Object.values(product).map((d, idx) => {
          return (
            <li key={d.name}>
              <button
                type="button"
                onClick={() => {
                  setSelectedProductDetail(d);
                }}
              >
                {d.name}（{d.schedule.label}）
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryProducts;
