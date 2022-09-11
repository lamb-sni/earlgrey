import * as React from "react";
import ClassNames from "classnames";
import useOnClickOutside from "../../utils/onClickOutside";
import style from "./style.module.scss";

interface Props {
  data: {
    value: string;
    label: string;
  }[];
  onClick: (v: string) => void;
}

const PopoverMenu = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => { setIsOpen(false); });

  return (
    <div className={style.wrapper} ref={ref}>
      <span
        onClick={() => { setIsOpen(!isOpen); }}
        className={style.icon}
      />
      <div className={ClassNames(style.popover, { [style.isHide]: !isOpen })}>
        {props.data.map((d, idx) => {
          return (
            <div className={style.item} key={d.value + idx.toString()}>
              <div
                className={style.itemInner}
                onClick={() => { props.onClick(d.value); }}
              >
                <p className={style.label}>{d.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopoverMenu;
