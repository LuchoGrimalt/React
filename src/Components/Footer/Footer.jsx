import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-warning d-flex text-start ">
      <div className="col-3">
        <h6 className="f-bold ms-4 my-3">Servicio y soporte</h6>
        <ul>Como hacer un pedido</ul>
        <ul>Entrega</ul>
        <ul>Pago</ul>
        <ul>Devoluciones y cambios</ul>
      </div>
      <div className="col-3">
        <h6 className="f-bold ms-4 my-3">Informacion</h6>
        <ul>Tabla de tallas </ul>
        <ul>Cuidado de las prendas</ul>
        <ul>Preguntas Frecuentes</ul>
        <ul>Políticas de privacidad</ul>
      </div>
      <div className="col-3">
        <h6 className="f-bold ms-4 my-3">Empresa</h6>
        <ul>Sobre nosotros</ul>
        <ul>Mision</ul>
        <ul>Noticias</ul>
        <ul>Certificados</ul>
      </div>
      <NavLink to="/" className="rounded-10 m-2">
        <img
          src="../Images/Logo.png"
          width={200}
          height={45}
          alt="Logo Guadapulpe"
        ></img>
      </NavLink>
    </div>
  );
}
