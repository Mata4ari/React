
interface SearchBarProps {
  onFilterTextChange: (filterText: string) => void;
  onInStockChange: (inStockOnly: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onInStockChange(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
      <p>
        <input type="checkbox" onChange={handleInStockChange} />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;