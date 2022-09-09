import * as React from "react";
import ClassNames from "classnames";
import PopoverMenu from "../PopoverMenu";
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
  noFlex?: boolean;
}

const Tag = (props: Props) => {
  return (
    <div className={ClassNames(style.wrapper, { [style.noFlex]: props.noFlex })}>
      {props.data.map((d, idx) => {
        return (
          <div className={style.item} key={d.value + idx.toString()}>
            <div
              className={ClassNames(style.itemInner, {
                [style.optionItem]: props.optionType && props.onClickOption
              })}
              onClick={() => { props.onClick(d.value); }}
            >
              <p className={style.label}>{d.label}</p>
            </div>
            {
              props.optionType === "add" &&
                <span
                  onClick={() => { props.onClickOption && props.onClickOption(d.value); }}
                  className={ClassNames(style.option, style.add)}
                />
            }
            {
              props.optionType === "menu" &&
                <div className={style.menuWrapper}>
                  <PopoverMenu
                    data={[
                      {
                        value: "delete",
                        label: "削除"
                      },
                      {
                        value: "delete",
                        label: "削除"
                      },
                      {
                        value: "delete",
                        label: "削除"
                      }
                    ]}
                    isOpen={true}
                    onClick={v => {}}
                  />
                </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
