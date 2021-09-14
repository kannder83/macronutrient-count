import Links from "./Links";
import Title from "./Title";

const Missing = ({ page, link_text, main_title }) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title="404" />
          <Title main_title={main_title} />
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Missing;
