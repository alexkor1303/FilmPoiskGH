import classNames from "classnames";
import styles from "./styles.module.css";
import searchIcon from "../../icons/Icon.png";
import closeIcon from "../../icons/x.svg";
import { useDebounce } from "../../hooks/use-debounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const [titleNow, setTitleNow] = useState(title);
  const debounceSearch = useDebounce(titleNow);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("title", titleNow);
      return prev;
    });
  }, [debounceSearch]);

  return (
    <div className={classNames(styles.wrapper)}>
      <img
        src={closeIcon}
        alt="delete"
        className={styles.closeIcon}
        onClick={() => setTitleNow("")}
      />
      <input
        placeholder="Название фильма"
        className={classNames(styles.input)}
        value={titleNow}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitleNow(e.target.value);
        }}
      />
      <img
        className={classNames(styles.search_icon)}
        src={searchIcon}
        alt="search icon"
      />
    </div>
  );
};
