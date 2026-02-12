import Header from "./components/Header/Header";
import "./style.css"
import {Routes,Route} from "react-router-dom"
import Connexion from "./components/Connexion/Connexion";
function App() {
  return (
    <><Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Connexion/>}/>
          <Route path="/home"></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
