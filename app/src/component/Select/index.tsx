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
  isDisabled?: boolean;
  disabledText?: string;
  selectedValue?: string;
}

const Select = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState("未選択");
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => { setIsOpen(false); });

  React.useEffect(() => {
    if (!props.selectedValue) {
      return;
    }
    props.data.map(d => {
      if (d.value === props.selectedValue) {
        setSelectedLabel(d.label);
      }
      return null;
    });
  }, [props.selectedValue, props.data]);

  return (
    <div className={style.wrapper} ref={ref}>
      <div
        className={ClassNames(style.selected, {
          [style.isDisabled]: props.isDisabled
        })}
        onClick={() => { setIsOpen(!isOpen); }}
      >
        <span>
          {props.isDisabled ? props.disabledText : selectedLabel}
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
