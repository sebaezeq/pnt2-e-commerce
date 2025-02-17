"use client";

import { useState, useEffect } from "react";
import Sale from "../Sale"; 
import mockSales from "../mockSales";

export default function DetalleVenta({ params }) {
  const { _id } = params; 
  const [sale, setSale] = useState(null); 

  useEffect(() => {
    const ventaEncontrada = mockSales.find((p) => p._id === _id);
    setSale(ventaEncontrada);
  },[_id]);
 
   if(!sale) return <p>Cargando...</p>;

  return (
    
      <Sale
      _id={sale._id}
        productName={sale.productName}
        customerName={sale.customerName}
        saleDate={sale.saleDate}
        totalAmount={sale.totalAmount}
      />
  );
}
