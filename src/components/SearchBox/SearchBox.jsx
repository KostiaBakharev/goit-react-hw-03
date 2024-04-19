import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <br />
      <input
        className={css.filter}
        type="text"
        name="filter"
        placeholder="Search..."
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
export default SearchBox;
