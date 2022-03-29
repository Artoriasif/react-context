import React, { useState, useContext } from "react";
import { CustomerContext } from "../context/customer";
const CustomerForm = () => {
  const { submit } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("dados do form", { name, email });

    submit({ name, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label hmtlfor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label hmtlfor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CustomerForm;
