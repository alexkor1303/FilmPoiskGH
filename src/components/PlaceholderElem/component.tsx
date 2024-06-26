import { useState } from "react";
import style from "./component.module.scss";
import cn from "classnames";
interface PlaceholderProps {
  title: string;
}
export const PlaceholderElem = ({ title }: PlaceholderProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className={cn(style.wrapper, {})}>
      <p>{title}</p>
      <div
        onClick={() => setActive(!active)}
        className={cn(style.placeholder, style.unActive, {
          [style.active]: active,
        })}>
        <p>Выберите жанр</p>
        <div className={style.dropDownBox}>
          <p className={style.arrow}>+</p>
        </div>
      </div>
    </div>
  );
};
