import { ButtonElem } from "../index";
import cn from "classnames";
import style from "./component.module.scss";
export const Header = () => {
  return (
    <div className={cn(style.headerWrapper)}>
      <h1>Фильмопоиск</h1>
      <ButtonElem text="Войти" />
    </div>
  );
};
