import * as React from "react";
import { useRecoilState } from "recoil"
import ClassNames from "classnames";
import { selectedProductsAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import { totalTime } from "../../../data/schedule";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const Schedule = () => {
  const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsAtom);
  const [isOpen, setIsOpen] = React.useState(false);

  const tagData = selectedProducts.map(d => {
    return {
      value: d.name,
      label: `${d.name}（${d.schedule.label}）`
    };
  }).filter(v => v.value);

  const sumTime = selectedProducts
    .map(d => d.name ? d.schedule.value : 0)
    .reduce((acc, crr) => acc + crr, 0);

  return (
    <>
      <div className={ClassNames(style.wrapper, { [style.isHide]: !isOpen })}>
        <div className={style.inner}>
          <div className={style.tags}>
            <Tag
              data={tagData}
              onClick={v => {
                console.log(v);
              }}
              onClickOption={v => {
                console.log(v);
              }}
              optionType="menu"
              noFlex
            />
          </div>
          <div className={style.status}>
            <div className={style.time}>
              <p className={style.totalTime}>
                <span className={ClassNames({[style.over]: sumTime > totalTime})}>{sumTime}時間</span> / {totalTime}時間
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className={ClassNames(style.toggle, { [style.isClosed]: !isOpen })} onClick={() => { setIsOpen(!isOpen); }} />
    </>
  );
};

export default Schedule;
