import * as React from "react";
import { useRecoilState } from "recoil"
import { selectedProductsAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const Schedule = () => {
  const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsAtom);
  if (selectedProducts.length === 1) {
    // initialStateの場合
    return null;
  }
  const tagData = selectedProducts.map(d => {
    return {
      value: d.name,
      label: `${d.name}（${d.schedule.label}）`
    };
  }).filter(v => v.value);

  return (
    <div>
      <Tag
        data={tagData}
        onClick={v => {
          console.log(v);
        }}
        onClickOption={v => {
          console.log(v);
        }}
        optionType="menu"
      />
    </div>
  );
};

export default Schedule;
