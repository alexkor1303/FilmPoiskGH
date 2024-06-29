import { useEffect, useState } from "react";
import { Film } from "../index";
import style from "./component.module.scss";

type FilmType = {
  poster: string;
  title: string;
  genre: string;
  release_year: string;
  description: string;
  rating: string;
};

interface FilmListProps {
  year: string;
  genre: string;
  searchValue: string;
  page: number;
}
export const FilmsList = ({
  year,
  genre,
  page,
  searchValue,
}: FilmListProps) => {
  const [films, setFilms] = useState<FilmType[]>([]);

  useEffect(() => {
    const titleRout = searchValue !== "" ? `title=${searchValue}` : "";
    const pageRout = page === 1 ? "" : `&page=${page}`;
    const genreRout = genre !== "" && genre !== "0" ? `&genre=${genre}` : "";
    const release_yearRout =
      year !== "" && year !== "0" ? `&release_year=${year}` : "";

    const getFilms = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/api/v1/search?${titleRout}${pageRout}${genreRout}${release_yearRout}`
        );

        const data = await response.json();
        if (data.search_result) {
          setFilms(data.search_result);
        } else {
          console.log("data is not array");
        }
      } catch (error) {
        console.error("error on fetching films", error);
      }
    };
    getFilms();
  }, [year, genre, page, searchValue]);

  return (
    <div className={style.wrapper}>
      {films.map((film) => (
        <Film
          key={film.title}
          poster={film.poster}
          title={film.title}
          genre={film.genre}
          year={film.release_year}
          description={film.description}
          rating={film.rating}
        />
      ))}
    </div>
  );
};
