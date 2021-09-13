import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="main">
      <h3>Page Not Found.</h3>
      <p>
        <Link to="/">Home</Link>
      </p>
    </main>
  );
};

export default Missing;
