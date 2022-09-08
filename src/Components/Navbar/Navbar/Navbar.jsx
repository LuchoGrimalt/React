import React from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <div className="navbar bg-white bg-gradient sticky-top border-bottom">
      <ButtonGroup size="sm" className="d-flex align-items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button className="mx-2 btn-light fs-5">Incio</Button>
        </NavLink>{" "}
        <NavLink
          to="/Categoria/Indumentaria"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button className="mx-2 btn-light fs-5">Indumentaria</Button>
        </NavLink>{" "}
        <NavLink
          to="/Categoria/Accesorios"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button className="mx-2 btn-light fs-5">Accesorios</Button>
        </NavLink>{" "}
      </ButtonGroup>
      <NavLink to="/">
        <img
          className="marca rounded"
          src="../Images/Logo.png"
          width={400}
          height={90}
          alt="Logo Guadapulpe"
        ></img>
      </NavLink>
      <Form className="d-flex align-items-center mx-2">
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="m-0"
          aria-label="search"
        />
        <Button variant="outline-primary m-0 p-0 border-0">
          <img src="../Images/lupa.png " width={38} height={38} alt="search" />
        </Button>
      </Form>
      <CartWidget className="mx-2" />
    </div>
  );
}
