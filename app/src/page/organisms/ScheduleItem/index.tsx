import * as React from "react";
import { useRecoilState } from "recoil"
import ClassNames from "classnames";
import { selectedProductsAtom } from "../../../state/atom";
import { products, ProductsKey } from "../../../data";
import { CategoriesKey } from "../../../data/categories";
import { totalTime } from "../../../data/schedule";
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
                    <p>人気：大人気</p>
                    <PopoverMenu
                      data={[
                        {
                          value: "veryPopular",
                          label: "大人気"
                        },
                        {
                          value: "popular",
                          label: "人気"
                        },
                        {
                          value: "usually",
                          label: "普通"
                        },
                        {
                          value: "unpopular",
                          label: "不人気"
                        }
                      ]}
                      onClick={v => { console.log(v); }}
                    />
                  </li>
                  <li className={style.setting}>
                    <p>需要：超供給不足</p>
                    <PopoverMenu
                      data={[
                        {
                          value: "superShortSupply",
                          label: "超供給不足"
                        },
                        {
                          value: "shortSupply",
                          label: "供給不足"
                        },
                        {
                          value: "usually",
                          label: "普通"
                        },
                        {
                          value: "overSupply",
                          label: "供給過多"
                        },
                        {
                          value: "superOverSuppley",
                          label: "超供給過多"
                        }
                      ]}
                      onClick={v => { console.log(v); }}
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
