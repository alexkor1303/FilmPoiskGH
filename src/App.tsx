import { Filter, Search, FilmsList } from "./components";

import "./App.css";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  
  return (
    <div className="wrapper">
      <div className="main-section">
        <Filter title="Фильтр" setYear={setYear} setGenre={setGenre} />
        <div className="filmsSection">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <FilmsList year={year} genre={genre} />
        </div>
      </div>
    </div>
  );
}

export default App;
