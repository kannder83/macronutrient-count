import Form from "./Form";
import Links from "./Links";

const Home = ({ main_title }) => {
  return (
    <main className="main">
      <section className="container">
        <h3>{main_title}</h3>
        <Form />
        <Links />
      </section>
    </main>
  );
};

export default Home;
