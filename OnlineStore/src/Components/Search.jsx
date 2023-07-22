import React from 'react';
import { useState } from 'react';
import SearchList from './SearchList';

const Search = ({products, onFilter}) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredProducts = products.filter(
    item => {
      return (item.title.toLowerCase().includes(searchField.toLowerCase()));
    }
  );
  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
    onFilter(filteredProducts);
  };
 
  

  return (
    <>
       <section className="garamond bg-info d-flex justify-content-end px-3">
      <div className="navy georgia ma0 grow">
        <h2 className="fs-4 me-3">Search Here</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search products" 
          onChange = {handleChange}
        />
      </div>
   
      {searchShow && <SearchList filteredProducts={filteredProducts} />}
    </section>
    </>
  )
}

export default Search;
