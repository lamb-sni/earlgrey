import * as React from "react";
import { useRecoilValue } from "recoil"
import ClassNames from "classnames";
import { selectedProductsAtom, selectedProductsIncludedBonusAtom } from "../../../state/atom";
import { totalTime } from "../../../data/schedule";
import { getPopularityRate } from "../../../data/popularity";
import { getDemandRate } from "../../../data/demand";
import ScheduleItem from "../ScheduleItem";
import style from "./style.module.scss";

const Schedule = () => {
  const selectedProducts = useRecoilValue(selectedProductsAtom);
  const selectedProductsIncludedBonus = useRecoilValue(selectedProductsIncludedBonusAtom);
  const [isOpen, setIsOpen] = React.useState(false);
  const [motivation, setMotivation] = React.useState(0);
  const maxMotivation = 35;

  const sumTime = selectedProducts
    .map(d => d.name ? d.schedule.value : 0)
    .reduce((acc, crr) => acc + crr, 0);

  const sumAmount = selectedProductsIncludedBonus.map(d => {
    const amount = d.amount;
    const popluarityRate = getPopularityRate(d.popularity);
    const demandRate = getDemandRate(d.demand);
    const bonusRate = d.isBonus ? 2.0 : 1.0;
    const motivationRate = (motivation + 100) / 100;
    const result = Math.floor(amount * popluarityRate * demandRate * bonusRate * motivationRate);
    return result;
  }).reduce((acc, crr) => acc + crr, 0);

  return (
    <>
      <div className={ClassNames(style.wrapper, { [style.isHide]: !isOpen })}>
        <div className={style.inner}>
          <div className={style.items}>
            <ScheduleItem />
          </div>
          <div className={style.status}>
            <div className={style.time}>
              <p>やる気：</p>
              <div className={style.motivationWrap}>
                <p
                  className={ClassNames(style.motivationButton, style.minus, {
                    [style.disabled]: !motivation
                  })}
                  onClick={() => { if (motivation) { setMotivation(motivation - 1); } }}
                />
                <p className={style.motivation}>{motivation.toString()}</p>
                <p
                  className={ClassNames(style.motivationButton, style.plus, {
                    [style.disabled]: motivation >= maxMotivation
                  })}
                  onClick={() => { if (motivation < maxMotivation) { setMotivation(motivation + 1); } }}
                />
              </div>
            </div>
            <div className={style.time}>
              <p className={style.totalTime}>
                <span className={ClassNames({[style.over]: sumTime > totalTime})}>{sumTime}時間</span> / {totalTime}時間
              </p>
            </div>
            <div className={style.time}>
              <div className={style.totalTime}>
                <p>予想収入：<span>{sumAmount}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={ClassNames(style.toggle, { [style.isClosed]: !isOpen })} onClick={() => { setIsOpen(!isOpen); }} />
    </>
  );
};

export default Schedule;
