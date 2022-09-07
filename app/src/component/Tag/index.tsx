import * as React from "react";
import ClassNames  from "classnames";
import style from "./style.module.scss";

interface Props {
  data: {
    value: string;
    label: string;
  }[];
  onClick: (v: string) => void;
}

const Tag = (props: Props) => {
  return (
    <div className={style.wrapper}>
      {props.data.map(d => {
        return <div className={style.item} key={d.value}>{d.label}</div>
      })}
    </div>
  );
};

export default Tag;
