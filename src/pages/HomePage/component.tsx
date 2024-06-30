import classNames from "classnames";
import { Films } from "../../components/FilmsBlock/component";
import { Genres } from "../../components/GenresElem/component";
import { Search } from "../../components/SearchElem/component";
import { Years } from "../../components/YearsElem/component";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div className={classNames(styles.container)}>
      <nav className={classNames(styles.side_box)}>
        <h4>Фильтр</h4>
        <div className={classNames(styles.filter_box)}>
          <Genres />
          <Years />
        </div>
      </nav>
      <div className={classNames(styles.main)}>
        <Search />
        <Films />
      </div>
    </div>
  );
};
