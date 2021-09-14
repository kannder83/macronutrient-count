import Title from "./Title";
import Links from "./Links";
import Buttons from "./Buttons";
import { useState } from "react";

const Objective = ({ main_title, page, link_text }) => {
  const [option, setOption] = useState();

  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <div className="box">
            <Buttons
              button_text="Subir de peso"
              option={option}
              setOption={setOption}
              bgColor="btn_t80"
            />
            <Buttons
              button_text="Mantener el peso"
              option={option}
              setOption={setOption}
              bgColor="btn_t60"
            />
            <Buttons
              button_text="Bajar de peso"
              option={option}
              setOption={setOption}
              bgColor="btn_t40"
            />
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Objective;
