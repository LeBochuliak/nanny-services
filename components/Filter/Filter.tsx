import css from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={css.selectWrap}>
      <p className={css.text}>Filters</p>
      <select className={css.select}>
        <option value="AtoZ">A to Z</option>
        <option value="ZtoA">Z to A</option>
        <option value="lessThan10">Less than 10$</option>
        <option value="greaterThan10">Greater than 10$</option>
        <option value="popular">Popular</option>
        <option value="notPopular">Not popular</option>
      </select>
    </div>
  );
};

export default Filter;
