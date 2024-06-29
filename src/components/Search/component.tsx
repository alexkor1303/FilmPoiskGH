import { ChangeEvent } from "react";
import style from "./component.module.scss";

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <p className={style.icon}>q</p>
      <input
        className={style.input}
        placeholder="Название фильма"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue && (
        <p onClick={() => setSearchValue("")} className={style.closeIcon}>
          q
        </p>
      )}
    </div>
  );
};
