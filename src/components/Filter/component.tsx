import style from "./component.module.scss";
import { Placeholder, WhiteBlock } from "../index";
import { GENRES, YEARS } from "../../staticData";

interface FilterProps {
  title: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}
export const Filter = ({ title, setYear, setGenre }: FilterProps) => {
  return (
    <div className={style.wrapper}>
      <WhiteBlock>
        <h3>{title}</h3>
        <Placeholder
          headTitle="Жанр"
          data={GENRES}
          innerTitle="Выберите жанр"
          changeState={setGenre}
        />
        <Placeholder
          headTitle="Год выпуска"
          data={YEARS}
          innerTitle="Выберите год"
          changeState={setYear}
        />
      </WhiteBlock>
    </div>
  );
};
