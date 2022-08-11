import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarWidget from '../CarWidget/CarWidget';


export default function Navbar() {
  return (
    <div className="navbar bg-warning" >
        <>🐣</>
        <ButtonGroup size= "lg" claseName ="mb-2">
        <Button bg="secondary">Home</Button>
        <Button bg="secondary">Niñ@s</Button>
        <Button bg="secondary">Accesorios</Button>
        <Button bg="secondary">Arte</Button>
        </ButtonGroup>
        <CarWidget />
    </div>
  );
}
