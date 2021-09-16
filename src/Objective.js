import Title from "./Title";
import Links from "./Links";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Objective = ({ main_title, page, link_text, option, setOption }) => {
  return (
    <main className="main">
      <section className="container">
        <article className="wrapper">
          <Title main_title={main_title} />
          <div className="box_objetive">
            <Link to="/diary" className="content_button">
              <Buttons
                button_text="Subir de peso"
                option="gainWeight"
                setOption={setOption}
                bgColor="btn_t80"
              />
            </Link>
            <Link to="/diary" className="content_button">
              <Buttons
                button_text="Mantener el peso"
                option="maintainWeight"
                setOption={setOption}
                bgColor="btn_t60"
              />
            </Link>
            <Link to="/diary" className="content_button">
              <Buttons
                button_text="Bajar de peso"
                option="loseWeight"
                setOption={setOption}
                bgColor="btn_t40"
              />
            </Link>
          </div>
          <Links page={page} link_text={link_text} />
        </article>
      </section>
    </main>
  );
};

export default Objective;
