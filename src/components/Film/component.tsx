import { WhiteBlock } from "..";
import style from "./component.module.scss";

interface FilmProps {
  poster?: string;
  title: string;
  genre: string;
  year: string;
  description: string;
  rating: string;
}

export const Film = ({
  poster,
  title,
  genre,
  year,
  description,
  rating,
}: FilmProps) => {
  return (
    <WhiteBlock>
      <div className={style.wrapper}>
        <section>
          <img src="" alt={poster} />
        </section>
        <section>
          <h3>{title}</h3>
          <p>{`Жанр :  ${genre}`}</p>
          <p>{`Год :  ${year}`}</p>
          <p>{`Описание :  ${description}`}</p>
        </section>
        <section>тут звезды{rating}</section>
      </div>
    </WhiteBlock>
  );
};
