
import React from 'react';
import CardComp from './CardComp';

function SearchList({ filteredProducts }) {
  const filtered = filteredProducts.map(items =>  <CardComp key={items.id} product={items} />); 
  return (
    <div>
      {filtered}
    </div>
  );
} 

export default SearchList;

