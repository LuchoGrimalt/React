import React from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <div className="navbar d-flex justify-content-evenly bg-white sticky-top border-bottom">
      <NavLink to="/">
        <img
          className="marca rounded"
          src="../Images/Logo.png"
          width={400}
          height={90}
          alt="Logo Guadapulpe"
        ></img>
      </NavLink>
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
      <CartWidget className="mx-2" />
    </div>
  );
}
