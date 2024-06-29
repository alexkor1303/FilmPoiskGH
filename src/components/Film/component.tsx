import { FilmPoster, WhiteBlock, FilmInfo, FilmRating } from "..";
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
        <div className={style.poster}>
          <FilmPoster path={poster} />
        </div>
        <div className={style.filmInfo}>
          <FilmInfo
            title={title}
            genre={genre}
            year={year}
            description={description}
          />
        </div>
        <div className={style.rating}>
          <FilmRating rating={rating} />
        </div>
      </div>
    </WhiteBlock>
  );
};
