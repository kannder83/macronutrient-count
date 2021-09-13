import Form from "./Form";
import Links from "./Links";

const Home = ({ main_title }) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <h3 className="main_title">{main_title}</h3>
          <Form />
          <Links />
        </article>
      </section>
    </main>
  );
};

export default Home;
