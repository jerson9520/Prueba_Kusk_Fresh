
// eslint-disable-next-line react/prop-types
export const Search = ({ query, setQuery, handleSearch, placeholder }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="border border-gray-300 px-3 py-1 rounded-full focus:outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-1 rounded-full ml-2"
      >
        Search
      </button>
    </form>
  );
};
