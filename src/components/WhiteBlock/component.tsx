import React from "react";
import style from "./component.module.scss";

interface whiteBlockProps {
  children: React.ReactNode;
}
export const WhiteBlock = ({ children }: whiteBlockProps) => {
  return <div className={style.wrapper}>{children}</div>;
};
