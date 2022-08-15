import React from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarWidget from "../CarWidget/CarWidget";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-warning" >
      <ButtonGroup size="lg" className="mb-2">
        <img
          className="marca"
          src="../Images/favicon.ico"
          width={40}
          height={40}
          alt="Logo Guadapulpe"
        ></img>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button bg="secondary">Incio</Button>
        </NavLink>{" "}
        <NavLink
          to="/Categoria/Ropa"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button bg="secondary">Ropa</Button>
        </NavLink>{" "}
        <NavLink
          to="/Categoria/Accesorios"
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
        >
          <Button bg="secondary">Accesorios</Button>
        </NavLink>{" "}
      </ButtonGroup>
      <CarWidget />
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
