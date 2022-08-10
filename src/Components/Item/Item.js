import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';

const Item = (prod) => {
  return (
    <Card style={{ width: '18rem', margin:'12px', padding:'8px' }}>
      <Card.Img src={prod.img} variant="top" />
      <Card.Body>
        <Card.Title>
            <h2>{prod.name}</h2>
            <h6>Categoria:{prod.category}</h6>
            <h6>Oferta ${prod.price}</h6>
            <h6>stock {prod.stock}</h6>
        </Card.Title>
        <ItemCount />
        <Card.Text>Ofertas de invierno</Card.Text>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
