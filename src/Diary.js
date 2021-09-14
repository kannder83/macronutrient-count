import Title from "./Title";
import Links from "./Links";

const Diary = ({ main_title, page, link_text }) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <div className="box">
            <p>Proteina</p>
            <p>30 gr</p>
            <p>Grasas</p>
            <p>30 gr</p>
            <p>Calorias</p>
            <p>30 gr</p>
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Diary;
