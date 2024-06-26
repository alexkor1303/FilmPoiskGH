import { Header, Filter, WhiteBlock } from "./components";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-section">
        <Filter title="Фильтр" />
        <WhiteBlock>film list</WhiteBlock>
      </div>
    </div>
  );
}

export default App;
