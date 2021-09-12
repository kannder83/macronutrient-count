import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  const title = "Conteo de Macronutrientes";

  return (
    <section className="App">
      <Header title={title} />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
