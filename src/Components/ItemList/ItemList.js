import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

export default function ItemList ({prod}){
  
    return(
        <Container fluid className="container">
            <Row className = "justify-content-md-center">
                {prod.map(art=>{
                    return(
                      <Item key={art.id} {...art} />)
                    })
                }
            </Row>
      </Container>
    )
  }