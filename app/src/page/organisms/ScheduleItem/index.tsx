import * as React from "react";
import { useRecoilState, useSetRecoilState } from "recoil"
import ClassNames from "classnames";
import {
  selectedProductsAtom,
  selectedProductsIncludedBonusAtom,
  selectedProductDetailAtom,
  selectedCategoryAtom,
} from "../../../state/atom";
import { products } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import * as popularity from "../../../data/popularity";
import * as demand from "../../../data/demand";
import PopoverMenu from "../../../component/PopoverMenu";
import style from "./style.module.scss";

const ScheduleItem = () => {
  const setSelectedProductsIncludedBonus = useSetRecoilState(selectedProductsIncludedBonusAtom);
  const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsAtom);
  const setSelectedProductDetail = useSetRecoilState(selectedProductDetailAtom);
  const setSelectedCategory = useSetRecoilState(selectedCategoryAtom);
  const [selectedProductName, setSelectedProductName] = React.useState("");
  const [isBonusArr, setIsBonusArr] = React.useState([] as boolean[]);
  const isEmpty = selectedProducts.length === 1;

  React.useEffect(() => {
    const result = selectedProducts.map((d, idx) => {
      if (!idx) {
        return false;
      }
      const beforeItem = selectedProducts[idx - 1];
      const isBonus = beforeItem.categories.map(o => {
        return d.categories.includes(o);
      }).includes(true);
      return isBonus;
    });
    setIsBonusArr(result);
  }, [selectedProducts]);

  React.useEffect(() => {
    const result = selectedProducts.map((d, idx) => {
      return {
        ...d,
        isBonus: isBonusArr[idx]
      };
    });
    setSelectedProductsIncludedBonus(result);
  }, [isBonusArr]);


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

  if (isEmpty) {
    return (
      <div className={ClassNames(style.wrapper)}>
        <div>???????????????????????????????????????</div>
      </div>
    )
  }

  return (
    <div className={ClassNames(style.wrapper)}>
      <div>
        {selectedProducts.map((d, idx) => {
          if (!d.name) {
            return null;
          }
          return (
            <div className={style.itemWrapper} key={d.name + idx.toString()}>
              <div
                className={style.item}
                onClick={() => {
                  setSelectedProductName(d.name);
                }}
              >
                <p>{d.name}</p>
                <p>???????????????{d.schedule.label}</p>
                <p>??????????????? ???{d.amount}</p>
                <p>{isBonusArr[idx] ? "???????????????????????????????????????" : null}</p>
              </div>
              <div className={style.settings}>
                <ul>
                  <li className={style.setting}>
                    <p>?????????{popularity.convertPopularityLabel(d.popularity)}</p>
                    <PopoverMenu
                      data={Object.entries(popularity.popularity).map(d => {
                        return {
                          value: d[0],
                          label: d[1].label
                        };
                      })}
                      onClick={v => {
                        const result = selectedProducts.map((o, i) => {
                          if (i === idx) {
                            return {
                              ...o,
                              popularity: v as popularity.PopularityKey
                            };
                          }
                          return o;
                        });
                        setSelectedProducts(result);
                      }}
                    />
                  </li>
                  <li className={style.setting}>
                    <p>?????????{demand.convertDemandLabel(d.demand)}</p>
                    <PopoverMenu
                      data={Object.entries(demand.demand).map(d => {
                        return {
                          value: d[0],
                          label: d[1].label
                        };
                      })}
                      onClick={v => {
                        const result = selectedProducts.map((o, i) => {
                          if (i === idx) {
                            return {
                              ...o,
                              demand: v as demand.DemandKey
                            };
                          }
                          return o;
                        });
                        setSelectedProducts(result);
                      }}
                    />
                  </li>
                  <li className={ClassNames(style.setting, style.remove)}>
                    <p
                      onClick={() => {
                        const result = selectedProducts.map((o, i) => {
                          if (i === idx) {
                            return null;
                          }
                          return o;
                        }).filter((o): o is NonNullable<typeof o> => o != null);;
                        setSelectedProducts(result);
                        setSelectedProductsIncludedBonus(result);
                      }}
                    >??????</p>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ScheduleItem;
