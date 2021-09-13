const Form = () => {
  return (
    <form className="form">
      <label htmlFor="weight">Peso (kg)</label>
      <input id="weight" type="number" value="47" />
      <label htmlFor="calories">Calorías de Mantenimiento (kcal)</label>
      <input id="calories" type="number" value="1600" />
    </form>
  );
};

export default Form;
