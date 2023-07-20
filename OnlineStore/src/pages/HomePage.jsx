import React, { useState, useEffect } from 'react';
import CardComp from '../Components/CardComp';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async()=>{
    try {
        const response=await fetch('https://fakestoreapi.com/products');
        const data =await response.json();
        setProducts(data);
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    getProducts()
  },[]);
  return (
    <>
      {products.map((product) => {
        return <CardComp key={product.id} product={product} />;
      })}
    </>
  );
};

export default HomePage;