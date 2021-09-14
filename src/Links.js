import { Link } from "react-router-dom";

const Links = ({ page, link_text }) => {
  return (
    <p className="links">
      <Link className="links_content" to={page}>
        {link_text}
      </Link>
    </p>
  );
};

export default Links;
