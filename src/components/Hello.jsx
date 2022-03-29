import React, { useContext } from "react";
import { CustomerContext } from "../context/customer";

const Hello = () => {
  const { name } = useContext(CustomerContext);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Hello;
