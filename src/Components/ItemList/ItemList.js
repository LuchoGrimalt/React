import React from "react";
import { useEffect, useState } from "react";
import getFetch from "../Products/Products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";


export default function ItemList (){
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      getFetch
      .then ((resp)=> setProd (resp)) // genero un array si todo esta OK
      .catch (err => console.log(err))
      .finally(()=> setLoading(false)) // dps de la carga lo setea en false
    console.log(prod);
    },[])
  
    return(
        <Container fluid className="container">
            <Row className = "justify-content-md-center">
                {loading? <h2>Cargando.....</h2> : prod.map(art=>{
                    return(<Item key={art.id} {...art} />)
                    })
                }
            </Row>
      </Container>
    )
  }