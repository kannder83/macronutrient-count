import Title from "./Title";
import Links from "./Links";
import ItemView from "./ItemView";

const Diary = ({ main_title, page, link_text, weight, calories, option }) => {
  const msgError = "No hay datos que calcular.";
  const results = () => {
    let deltakcal = 0;
    let relationProtein = 0;
    let relationFat = 0;
    if (option === "maintainWeight") {
      deltakcal = 0;
      relationProtein = 1.2;
      relationFat = 1.1;
    }
    if (option === "gainWeight") {
      deltakcal = 500;
      relationProtein = 1.6;
      relationFat = 1.4;
    }
    if (option === "loseWeight") {
      deltakcal = -500;
      relationProtein = 1.1;
      relationFat = 1;
    }

    const grProtein = weight * relationProtein;
    const kcalProtein = grProtein * 4;
    const grFat = weight * relationFat;
    const kcalFat = grFat * 4;
    const kcalCarbs = calories - kcalProtein - kcalFat + deltakcal;
    const grCarbs = kcalCarbs / 4;
    const kcalTotal = kcalCarbs + kcalFat + kcalProtein;
    const allGrams = grProtein + grFat + grCarbs;

    const ddAmount = {
      proteins: grProtein.toFixed(),
      proteinskcal: kcalProtein.toFixed(),
      fats: grFat.toFixed(),
      fatkcal: kcalFat.toFixed(),
      carbohydrates: grCarbs.toFixed(),
      carbskcal: kcalCarbs.toFixed(),
      totalgrams: allGrams.toFixed(),
      totalkcal: kcalTotal.toFixed(),
    };
    return ddAmount;
  };
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          {option === "" ||
          results().totalkcal < 0 ||
          calories < 1000 ||
          results().carbskcal < 0 ||
          weight <= 20 ? (
            <Title main_title="" />
          ) : (
            <Title main_title={main_title} />
          )}
          {option === "" ||
          results().totalkcal < 0 ||
          calories < 1000 ||
          results().carbskcal < 0 ||
          weight <= 20 ? (
            <Title main_title={msgError} />
          ) : (
            <div className="box_item">
              <ItemView
                title_item="Proteinas"
                grams={results().proteins}
                kcals={results().proteinskcal}
                bg="bg_item_1"
              />
              <ItemView
                title_item="Grasas"
                grams={results().fats}
                kcals={results().fatkcal}
                bg="bg_item_2"
              />
              <ItemView
                title_item="Carbohidratos"
                grams={results().carbohydrates}
                kcals={results().carbskcal}
                bg="bg_item_2"
              />
              <ItemView
                title_item="Total"
                grams={results().totalgrams}
                kcals={results().totalkcal}
                bg="bg_item_1"
              />
            </div>
          )}
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Diary;
