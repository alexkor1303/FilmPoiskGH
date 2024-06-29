import { ChangeEvent } from "react";
import clearIcon from "../../icons/clear.svg";
import lenseIcon from "../../icons/lense.svg";
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
      <img src={lenseIcon} alt="lense" className={style.icon} />
      <input
        className={style.input}
        placeholder="Название фильма"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={style.closeIcon}
          src={clearIcon}
          alt="clear"
        />
      )}
    </div>
  );
};
