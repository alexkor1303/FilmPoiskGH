import style from "./component.module.scss";
import leftArrow from "../../icons/leftSpag.svg";
import rightArrow from "../../icons/rightSpag.svg";

interface pagProp {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination = ({ page, setPage }: pagProp) => {
  return (
    <div className={style.wrapper}>
      <button
        className={style.arrowWrapper}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}>
        <img src={leftArrow} alt="<" className={style.arrow} />
      </button>
      <span>{page}</span>
      <button
        className={style.arrowWrapper}
        onClick={() => setPage(page + 1)}
        disabled={page > 4}>
        <img src={rightArrow} alt=">" className={style.arrow} />
      </button>
    </div>
  );
};
