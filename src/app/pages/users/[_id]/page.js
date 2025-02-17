"use client";

import { useState, useEffect } from "react";
import User from "../User"; 
import mockUsers from "../mockUsers";

export default function DetalleCliente({ params }) {
  const { _id } = params; 
  const [client, setClient] = useState(null); 

  useEffect(() => {
    const clienteEncontrado = mockUsers.find((p) => p._id === _id);
    setClient(clienteEncontrado);
  },[_id]);

  if(!client) return <p>Cargando...</p>;

  return (
      <User
      _id={client._id}
      username={client.username}
      name={client.name}
      lastname={client.lastname}
      email={client.email}
      />
  );
}
