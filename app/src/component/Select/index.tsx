import * as React from "react";
import style from "./style.module.scss";

interface Props {
  data: {
    value: string;
    label: string;
  }[];
  onClick: (v: string) => void;
}

const Select = (props: Props) => {
  return (
    <ul>
      {props.data.map(d => {
        return (
          <li key={d.value}>
            <button
              type="button"
              onClick={() => { props.onClick(d.value); }}
            >
              {d.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Select;
