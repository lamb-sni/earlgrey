import * as React from "react";
import ClassNames  from "classnames";
import { useRecoilState } from "recoil"
import { selectedProductDetailAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import Tag from "../../../component/Tag";
import style from "./style.module.scss";

const ProductSearch = () => {
  const [word, setWord] = React.useState("");
  const [targetProductNameArr, setTargetProductNameArr] = React.useState([] as string[]);

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
        />
      </div>
      <div className={ClassNames(style.result, { [style.isHide]: !word })}>
        {
          targetProductNameArr.length
          ? <Tag data={tagData} onClick={v => {}} />
          : <p>対象となる島産品がありません</p>
        }
      </div>
    </div>
  );
};

export default ProductSearch;
