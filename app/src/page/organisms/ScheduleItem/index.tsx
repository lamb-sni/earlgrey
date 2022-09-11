import * as React from "react";
import { useRecoilState } from "recoil"
import ClassNames from "classnames";
import { selectedProductsAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import { totalTime } from "../../../data/schedule";
import * as popularity from "../../../data/popularity";
import * as demand from "../../../data/demand";
import Tag from "../../../component/Tag";
import PopoverMenu from "../../../component/PopoverMenu";
import style from "./style.module.scss";

const ScheduleItem = () => {
  const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsAtom);

  return (
    <div className={ClassNames(style.wrapper)}>
      <div>
        {selectedProducts.map((d, idx) => {
          if (!d.name) {
            return null;
          }
          return (
            <div className={style.itemWrapper} key={d.name + idx.toString()}>
              <div className={style.item} >
                <p>{d.name}</p>
                <p>作業時間：{d.schedule.label}</p>
                <p>単価：{d.amount}</p>
              </div>
              <div className={style.settings}>
                <ul>
                  <li className={style.setting}>
                    <p>人気：{popularity.convertPopularityLabel(d.popularity)}</p>
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
                    <p>需要：{demand.convertDemandLabel(d.demand)}</p>
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
                  <li className={style.setting}>
                    <p className={style.remove}>削除</p>
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
