import * as React from "react";
import ClassNames  from "classnames";
import useOnClickOutside from "../../utils/onClickOutside";
import style from "./style.module.scss";

interface Props {
  data: {
    value: string;
    label: string;
  }[];
  onClick: (v: string) => void;
}

const Select = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState("選択してください");
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => { setIsOpen(false); });

  return (
    <div className={style.wrapper} ref={ref}>
      <div
        className={style.selected}
        onClick={() => { setIsOpen(!isOpen); }}
      >
        <span>
          {selectedLabel}
        </span>
      </div>
      <ul className={ClassNames(style.select, {
        [style.isHide]: !isOpen
      })}>
        {props.data.map(d => {
          return (
            <li
              className={style.item}
              onClick={() => {
                props.onClick(d.value);
                setSelectedLabel(d.label);
                setIsOpen(false);
              }}
              key={d.value}
            >
              <span>{d.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
