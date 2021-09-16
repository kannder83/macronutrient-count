const ItemView = ({ title_item, grams, kcals, bg }) => {
  return (
    <div className={`item_box ${bg}`}>
      <p className="title_item">{title_item}</p>
      <p className="item_info">{`${grams} gr`}</p>
      <p className="item_info">{`${kcals} kcal`}</p>
    </div>
  );
};

export default ItemView;
