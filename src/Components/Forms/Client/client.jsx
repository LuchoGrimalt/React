import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

export const clientData = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const errorMessage = validate(email, phone);

  return (
    <Form
      onSubmit={(ev) => {
        ev.preventDefault();
        confirm(name, phone, email);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre Completo"
        autoComplete="off"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Telefono"
        autoComplete="off"
        value={phone}
        onChange={(ev) => setPhone(ev.target.value)}
      ></input>
      <input
        type="text"
        name="name"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></input>
      <p>{errorMessage}</p>
      <Button type="submit" disable={errorMessage}>
        {" "}
        Confirmar datos{" "}
      </Button>
    </Form>
  );
};

const validate = (email, phone) => {
  if (!email.includes("@")) return "Email incorrecto";
  if (phone.lenght < 2) return "Telefono incompleto";
};

const confirm = (name, email, phone) => {
  if (!name || !email || !phone) alert("Complete todos los campos por favor.");
};
export default clientData;
