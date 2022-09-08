import * as React from "react";
import ClassNames from "classnames";
import style from "./style.module.scss";

type OptionType = "add" | "remove" | "menu";

interface Props {
  data: {
    value: string;
    label: string;
  }[];
  onClick: (v: string) => void;
  onClickOption?: (v: string) => void;
  optionType?: OptionType;
}

const Tag = (props: Props) => {
  return (
    <div className={style.wrapper}>
      {props.data.map(d => {
        return (
          <div className={style.item} key={d.value}>
            <div
              className={ClassNames(style.itemInner, {
                [style.optionItem]: props.optionType && props.onClickOption
              })}
              onClick={() => { props.onClick(d.value); }}
            >
              <p className={style.label}>{d.label}</p>
            </div>
            {
              (props.optionType === "add" && props.onClickOption) &&
                <span
                  onClick={() => { props.onClickOption && props.onClickOption(d.value); }}
                  className={ClassNames(style.option, style.add)}
                />
            }
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
