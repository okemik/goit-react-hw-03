import styles from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Ara:
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className={styles.input}
          placeholder="İsim ara"
        />
      </label>
    </div>
  );
}

export default SearchBox;
