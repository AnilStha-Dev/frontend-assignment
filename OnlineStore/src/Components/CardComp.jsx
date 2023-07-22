import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComp = ({product}) => {
  
  return (
   
    <Card style={{ width: '18rem', height:'30rem'}} className='mt-4 mb-2' >
    <Card.Img variant="top" src={product.image} className='w-100 h-75' />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
  
    </Card.Body>
  </Card>
 
  )
}

export default CardComp;