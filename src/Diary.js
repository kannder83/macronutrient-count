import Title from "./Title";
import Links from "./Links";
import ItemView from "./ItemView";

const Diary = ({ main_title, page, link_text, dailyAmount }) => {
  const ddAmount = dailyAmount();
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <div className="box_item">
            <ItemView
              title_item="Proteinas"
              grams={ddAmount.proteins}
              kcals={ddAmount.proteinskcal}
              bg="bg_item_1"
            />
            <ItemView
              title_item="Grasas"
              grams={ddAmount.fats}
              kcals={ddAmount.fatkcal}
              bg="bg_item_2"
            />
            <ItemView
              title_item="Carbohidratos"
              grams={ddAmount.carbohydrates}
              kcals={ddAmount.carbskcal}
              bg="bg_item_2"
            />
            <ItemView
              title_item="Total"
              grams={ddAmount.totalgrams}
              kcals={ddAmount.totalkcal}
              bg="bg_item_1"
            />
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Diary;
