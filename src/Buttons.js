const Buttons = ({ button_text, option, setOption, bgColor }) => {
  return (
    <button
      value={option}
      onClick={(e) => setOption(e.target.value)}
      className={`button ${bgColor}`}
    >
      {button_text}
    </button>
  );
};

export default Buttons;
