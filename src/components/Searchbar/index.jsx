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
    <form onSubmit={submitQuery}>
      <button>
        <span>Search</span>
      </button>
      <input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Filter by name..."
      />
    </form>
  );
};
