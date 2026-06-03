const SearchBar = ({
  searchTerm,
  onSearch,
}) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={onSearch}
      placeholder="Search by author..."
      className="w-full rounded-lg border p-3"
    />
  );
};

export default SearchBar;