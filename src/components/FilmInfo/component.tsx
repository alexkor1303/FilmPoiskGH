import style from "./component.module.scss";
interface filmInfoProps {
  title: string;
  genre: string;
  year: string;
  description: string;
}
export const FilmInfo = ({
  title,
  genre,
  year,
  description,
}: filmInfoProps) => {
  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.infoWrapper}>
        <section className={style.tagBlock}>
          <p className={style.tag}>Жанр</p>
          <p className={style.tag}>Год выпуска</p>
          <p className={style.tag}>Описание</p>
        </section>
        <section className={style.infoBlock}>
          <p>{genre}</p>
          <p>{year}</p>
          <p>{description}</p>
        </section>
      </div>
    </div>
  );
};
