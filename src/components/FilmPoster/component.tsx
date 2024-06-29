import style from "./component.module.scss";
interface FilmPosterProps {
  path: string | undefined;
}

export const FilmPoster = ({ path = "" }: FilmPosterProps) => {
  return (
    <div className={style.wrapper}>
      <img src={`${path}`} alt="filmPoster" className={style.image} />
    </div>
  );
};
