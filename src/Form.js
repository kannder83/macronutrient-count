const Form = ({ setCalories, calories, weight, setWeight }) => {
  return (
    <form className="form">
      <label htmlFor="weight">Peso (kg)</label>
      <input
        id="weight"
        required
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label htmlFor="calories">Calorías de Mantenimiento (kcal)</label>
      <input
        id="calories"
        required
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
    </form>
  );
};

export default Form;
