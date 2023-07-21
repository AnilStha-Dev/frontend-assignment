import React, { useState, useEffect } from 'react';
import CardComp from '../Components/CardComp';
import axios from "axios";
import { useQuery } from 'react-query';

const HomePage = () => {
  const getProducts = async()=>{
    // try {
    //     const response=await  fetch('https://fakestoreapi.com/products');
    //     const data =await response.json();
    //     setProducts(data);
    // } catch (error) {
    //     console.log(error);
    // }
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
  return (
    <>
    {products.map((product) => {
      return <CardComp key={product.id} product={product} />;
    })}
  </>
   
  );
};

export default HomePage;