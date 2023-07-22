import React, { useState, useEffect } from 'react';
import CardComp from '../Components/CardComp';
import axios from "axios";
import { useQuery } from 'react-query';
import Search from '../Components/Search';
import { Link } from 'react-router-dom';
import NavbarComp from '../Components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const getProducts = async()=>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
      } catch (error) {
        console.error(error);
      }
  }
  const { isLoading, isError, data:products, error } = useQuery('todos', getProducts);
  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  const handleFilteredProducts = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };
  console.log(filteredProducts);
  return (
   
    <>
    <NavbarComp/>
    { <Search products={products} onFilter={handleFilteredProducts} /> }
    <div className="d-flex flex-wrap gap-4 justify-content-evenly bg-danger  ">
   
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => ( 
          
       
          <Link to={{ pathname: `/product/${product.id}`}} key={product.id}>
             <CardComp key={product.id} product={product} />
            </Link>
        
          ))
        : products.map((product) => (
         
          <Link to={{ pathname: `/product/${product.id}`}} key={product.id}>
             <CardComp key={product.id} product={product} />
            </Link>
          ))}
          </div>
  </>
   
  );
};

export default HomePage;

