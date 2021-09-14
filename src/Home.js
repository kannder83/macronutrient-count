import Form from "./Form";
import Links from "./Links";
import Title from "./Title";

const Home = ({
  main_title,
  setCalories,
  calories,
  weight,
  setWeight,
  page,
  link_text,
}) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <Form
            weight={weight}
            setWeight={setWeight}
            calories={calories}
            setCalories={setCalories}
          />
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Home;
