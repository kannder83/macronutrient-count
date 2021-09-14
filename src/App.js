import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Objective from "./Objective";
import Missing from "./Missing";
import Diary from "./Diary";

import { Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const title = "Conteo de Macronutrientes";
  const [weight, setWeight] = useState(40);
  const [calories, setCalories] = useState(1600);

  return (
    <div className="App">
      <Header title={title} />
      <Switch>
        <Route exact path="/">
          <Home
            main_title="Brindanos los siguientes datos:"
            weight={weight}
            setWeight={setWeight}
            calories={calories}
            setCalories={setCalories}
            page="/objetive"
            link_text="Calcular"
          />
        </Route>
        <Route path="/objetive">
          <Objective
            main_title="¿Cuál es tu objetivo?"
            page="/"
            link_text="Regresar"
          />
        </Route>
        <Route path="/diary">
          <Diary
            main_title="Para cumplir tu objetivo debes consumir diariamente:"
            page="/objetive"
            link_text="Regresar"
          />
        </Route>
        <Route path="*">
          <Missing page="/" link_text="Inicio" main_title="Page Not Found." />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
