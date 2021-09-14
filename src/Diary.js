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
            <p>{dailyAmount().proteins}</p>
            <p>Grasas</p>
            <p>{dailyAmount().fats}</p>
            <p>carbohidratos</p>
            <p>{dailyAmount().carbohydrates}</p>
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Diary;
