import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import PRODUCTS from '../state';
import '../Styles/FilterableProductTable.css'

const FilterableProductTable: React.FC = () => {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const handleFilterTextChange = (filterText: string) => {
    setFilterText(filterText);
  };

  const handleInStockChange = (inStockOnly: boolean) => {
    setInStockOnly(inStockOnly);
  };

  return (
    <div className='FilterableProductTable'>
      <SearchBar
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;