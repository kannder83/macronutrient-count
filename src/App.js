import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const title = "Conteo de Macronutrientes";
  const main_title = "Brindanos los siguientes datos:";

  return (
    <div className="App">
      <Header title={title} />
      <Switch>
        <Route exact path="/">
          <Home main_title={main_title} />
        </Route>
        <Route path="/objetive">
          <h3>Objetive</h3>
        </Route>
        <Route path="/diary">
          <h3>Diary</h3>
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
