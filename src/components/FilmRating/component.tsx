import { useState, useEffect } from "react";
import style from "./component.module.scss";
import starEmpty from "../../icons/star.svg";
import starFilled from "../../icons/orangeStar.svg";

interface FilmRatingProps {
  rating: string;
}

export const FilmRating = ({ rating }: FilmRatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numericRating = parseFloat(rating);
    const filledStars = Math.round(numericRating);
    const newRatingArray = [];

    for (let i = 0; i < 5; i++) {
      newRatingArray.push(
        <img
          key={i}
          src={i < filledStars ? starFilled : starEmpty}
          className={style.star}
          alt="star"
        />
      );
    }

    setRatingArray(newRatingArray);
  }, [rating]);

  return <div className={style.ratingContainer}>{ratingArray}</div>;
};
