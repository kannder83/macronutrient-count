const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <h2 className="sub_title">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
