import React from "react";
import style from "./component.module.scss";
import cn from "classnames";
interface whiteBlockProps {
  children: React.ReactNode;
}
export const WhiteBlock = ({ children }: whiteBlockProps) => {
  return <div className={cn(style.wrapper)}>{children}</div>;
};
