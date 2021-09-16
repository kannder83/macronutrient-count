import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Objective from "./Objective";
import Missing from "./Missing";
import Diary from "./Diary";

import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const title = "Conteo de Macronutrientes";
  const [weight, setWeight] = useState(50);
  const [calories, setCalories] = useState(1600);
  const [option, setOption] = useState("loseWeight");

  const dailyAmount = () => {
    const kcal = calories;
    const calculatePortions = (relationProtein, relationFat, useOption) => {
      const protein = parseInt(weight * relationProtein);
      const kcalProtein = parseInt(protein * 4);
      const fat = parseInt(weight * relationFat);
      const kcalFat = parseInt(fat * 9);
      let otherKcals = 0;
      if (useOption === "gainWeight") otherKcals = 500;
      if (useOption === "maintainWeight") otherKcals = 0;
      if (useOption === "loseWeight") otherKcals = -500;
      const kcalCarb = parseInt(kcal + otherKcals - kcalProtein - kcalFat);
      const carbs = parseInt(kcalCarb / 4);
      const totalKcals = parseInt(kcalCarb + kcalFat + kcalProtein);
      const totalGrams = parseInt(protein + fat + carbs);

      const userOption = {
        proteinskcal: kcalProtein,
        fatkcal: kcalFat,
        carbskcal: kcalCarb,
        proteins: protein,
        fats: fat,
        carbohydrates: carbs,
        totalkcal: totalKcals,
        totalgrams: totalGrams,
      };
      console.log(userOption);
      return userOption;
    };

    if (option === "gainWeight") {
      return calculatePortions(1.6, 1.2, "gainWeight");
    }
    if (option === "maintainWeight") {
      return calculatePortions(1.3, 1.1, "maintainWeight");
    }
    if (option === "loseWeight") {
      return calculatePortions(1.1, 1, "loseWeight");
    }
  };

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
            option={option}
            setOption={setOption}
          />
        </Route>
        <Route path="/diary">
          <Diary
            main_title="Para cumplir tu objetivo debes consumir diariamente:"
            page="/"
            link_text="Inicio"
            dailyAmount={dailyAmount}
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
