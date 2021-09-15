import Title from "./Title";
import Links from "./Links";

const Diary = ({ main_title, page, link_text, dailyAmount }) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <div className="box">
            <p>Proteina</p>
            <p>{dailyAmount().proteins} gr.</p>
            <span>{dailyAmount().proteinskcal} kcal.</span>
            <p>Grasas</p>
            <p>{dailyAmount().fats} gr.</p>
            <span>{dailyAmount().fatkcal} kcal.</span>
            <p>carbohidratos</p>
            <p>{dailyAmount().carbohydrates} gr.</p>
            <span>{dailyAmount().carbskcal} kcal.</span>
            <p>Total kcal</p>
            <p>{dailyAmount().totalkcal}</p>
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Diary;
