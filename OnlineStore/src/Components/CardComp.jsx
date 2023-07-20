import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComp = ({product}) => {
  console.log(product);
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
      <Button variant="primary">View Details</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default CardComp;