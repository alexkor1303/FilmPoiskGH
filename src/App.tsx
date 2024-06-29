import { Filter, Search, FilmsList, Pagination } from "./components";

import "./App.css";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div className="wrapper">
      <div className="main-section">
        <Filter title="Фильтр" setYear={setYear} setGenre={setGenre} />
        <div className="filmsSection">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <FilmsList
            year={year}
            genre={genre}
            page={page}
            searchValue={searchValue}
          />
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
