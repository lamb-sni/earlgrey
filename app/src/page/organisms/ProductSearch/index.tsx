import * as React from "react";
import ClassNames  from "classnames";
import { useRecoilState, useSetRecoilState } from "recoil"
import {
  selectedProductDetailAtom,
  selectedCategoryAtom,
  selectedProductsAtom
} from "../../../state/atom";
import { CategoriesKey } from "../../../data/categories";
import { products, getProductForScheduleByName } from "../../../data";
import { PopularityKey } from "../../../data/popularity";
import { DemandKey } from "../../../data/demand";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const ProductSearch = () => {
  const setSelectedProductDetail = useSetRecoilState(selectedProductDetailAtom);
  const setSelectedCategory = useSetRecoilState(selectedCategoryAtom);
  const [addedProducts, setAddedProducts] = useRecoilState(selectedProductsAtom);
  const [word, setWord] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [targetProductNameArr, setTargetProductNameArr] = React.useState([] as string[]);
  const [selectedProductName, setSelectedProductName] = React.useState("");

  React.useEffect(() => {
    if (!word) {
      setTargetProductNameArr([]);
      return;
    }

    const targetArr = Object.values(products).map(o => {
      return Object.values(o).map(d => {
        if (d.name.includes(word)) {
          return d.name;
        }
        return "";
      }).filter(v => v);
    }).flatMap(v => v);
    const result = Array.from(new Set(targetArr));
    setTargetProductNameArr(result);
  }, [word]);

  React.useEffect(() => {
    if (!selectedProductName) {
      return;
    }
    Object.values(products).map(o => {
      Object.values(o).map(d => {
        if (d.name === selectedProductName) {
          setSelectedCategory(d.category as CategoriesKey);
          setSelectedProductDetail(d);
        }
        return null;
      });
      return null;
    });
  }, [selectedProductName, setSelectedProductDetail, setSelectedCategory]);

  const tagData = targetProductNameArr.map(v => {
    return {
      value: v,
      label: v
    };
  });

  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <input
          value={word}
          className={style.input}
          type="text"
          onChange={e => { setWord(e.target.value); }}
          onFocus={() => { setIsOpen(true); }}
          onBlur={() => { setIsOpen(false); }}
        />
      </div>
      <div className={ClassNames(style.result, { [style.isHide]: !isOpen })}>
        {
          targetProductNameArr.length
          ? <Tag
              data={tagData}
              onClick={v => {
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
                setSelectedProductName(v);
              }}
            />
          : <p>対象となる島産品がありません</p>
        }
      </div>
    </div>
  );
};

export default ProductSearch;
