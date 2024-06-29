import { useState } from "react";
import style from "./component.module.scss";
import cn from "classnames";
import filterData from "../../interfaces/genres";

interface PlaceholderProps {
  headTitle: string;
  innerTitle: string;
  data: filterData;
  changeState: React.Dispatch<React.SetStateAction<string>>;
}

export const Placeholder = ({
  headTitle,
  data,
  innerTitle,
  changeState,
}: PlaceholderProps) => {
  const dataValues = Object.values(data);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(dataValues[0]);

  const onSelectSort = (i: number) => {
    setSelected(dataValues[i]);
    setActive(!active);
    const key = Object.keys(data).find((key) => data[key] === dataValues[i]);
    if (key) {
      changeState(key);
    }
    console.log(key);
  };

  return (
    <div className={style.wrapper}>
      <p>{headTitle}</p>
      <div
        className={cn(style.placeholder, style.unActive, {
          [style.active]: active,
        })}>
        <p className={cn({ [style.activeTitle]: selected !== dataValues[0] })}>
          {selected === dataValues[0] ? innerTitle : selected}
        </p>
        <div className={style.dropDownBox} onClick={() => setActive(!active)}>
          <p className={style.arrow}>+</p>
        </div>
      </div>
      {active && (
        <div
          className={cn(style.activeList, {
            [style.show]: active,
          })}>
          <ul>
            {dataValues.map((genre, i) => {
              return (
                <li key={i} onClick={() => onSelectSort(i)}>
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
