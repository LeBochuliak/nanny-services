import css from "./Filter.module.css";
import type { Sort } from "@/types/types";

interface FilterProps {
  onChange: (value: Sort) => void;
  value: Sort;
}

const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <div className={css.selectWrap}>
      <p className={css.text}>Filters</p>
      <select
        className={css.select}
        value={value}
        onChange={(e) => onChange(e.target.value as Sort)}
      >
        <option value="AtoZ">A to Z</option>
        <option value="ZtoA">Z to A</option>
        <option value="popular">Popular</option>
        <option value="notPopular">Not popular</option>
      </select>
    </div>
  );
};

export default Filter;
