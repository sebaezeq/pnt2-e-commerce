"use client"; 

import Link from "next/link";

function Sale(props) {
  return (
    <li>
      <div>
        <h1 style={{ fontWeight: "bold" }}>Venta: {props._id}</h1>
        <p>
          <strong>Producto:</strong> {props.productName}
        </p>
        <p>
          <strong>Comprador:</strong> {props.customerName}
        </p>
        <p>
          <strong>Fecha:</strong> {props.saleDate}
        </p>
        <p>
          <strong>Total:</strong> ${props.totalAmount}
        </p>
      </div>
      <div>
        <Link
          href={`/pages/sales/${props._id}`} 
          style={{ color: "blueviolet", fontWeight: "bold", marginRight: "10px" }}
        >
          Ver Detalles
        </Link>

        <Link
          href={`/pages/users/${props._id}`} 
          style={{ color: "greenyellow", fontWeight: "bold" }}
        >
          Ver Comprador
        </Link>
      </div>
    </li>
  );
}

export default Sale;
