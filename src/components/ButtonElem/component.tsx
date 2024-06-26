import style from "./component.module.scss";
import cn from "classnames";

interface ButtonElemProps {
  text: string;
  //   style: string;
  //   isActive: boolean;
}
export const ButtonElem = ({ text }: ButtonElemProps) => {
  return (
    <div className={cn(style.container)}>
      <button className={cn(style.button, style.filled)}>{text}</button>
    </div>
  );
};
