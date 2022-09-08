import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { selectedCategoryAtom, selectedProductDetailAtom } from "../../../state/atom";
import { products } from "../../../data";
import Select from "../../../component/Select";
import style from "./style.module.scss";

const CategoryProducts = () => {
  const selectedCategory = useRecoilValue(selectedCategoryAtom);
  const [selectedProductDetail, setSelectedProductDetail] = useRecoilState(selectedProductDetailAtom);
  const product = selectedCategory ? products[selectedCategory] : null;
  const selectData = product
    ? Object.values(product).map(d => {
        return {
          value: d.name,
          label: `${d.name}（${d.schedule.label}）`
        }
      })
    : [];

  return (
    <div className={style.wrapper}>
      <p>選択中の島産品　：</p>
      <ul>
        <Select
          data={selectData}
          onClick={v => {
            if (!product) {
              return;
            }
            Object.values(product).map(d => {
              if (d.name === v) {
                setSelectedProductDetail(d);
              }
              return null;
            });
          }}
          isDisabled={!selectedCategory}
          disabledText="カテゴリを選択してください"
          selectedValue={selectedProductDetail.name}
        />
      </ul>
    </div>
  );
};

export default CategoryProducts;
