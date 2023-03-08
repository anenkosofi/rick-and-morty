import { BiSearchAlt2 } from 'react-icons/bi';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const submitQuery = e => {
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    if (!query) {
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <form className={css.searchForm} onSubmit={submitQuery}>
      <button className={css.searchFormButton}>
        <BiSearchAlt2 size={24} />
        <span className={css.searchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Filter by name..."
      />
    </form>
  );
};
