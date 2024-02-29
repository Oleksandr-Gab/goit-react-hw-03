import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.searchBox}>
            <label htmlFor="15s151s51s1dfcs"> Find contact by name </label>
            <input
                className={css.search}
                id="15s151s51s1dfcs"
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            ></input>
        </div>
    );
}
