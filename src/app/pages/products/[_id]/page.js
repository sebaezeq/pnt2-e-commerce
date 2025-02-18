"use client";

import { useState, useEffect } from "react";
import Product from "../Product";
import mockProducts from "../mockProducts";

export default function DetalleProducto({ params }) {
    const { _id } = params;
    const [product, setProduct] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        const productoEncontrado = mockProducts.find((p) => p._id === _id);
        setProduct(productoEncontrado);
    }, [_id]);

    const handleCompra = () => {
        if (product) {
            setMensaje(`${product.name} comprado`);
            setTimeout(() => setMensaje(""), 2000); 
        }
    };

    if (!product) return <p>Cargando...</p>;

    return (
        <div>
            <Product
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
            />
            <button 
                onClick={handleCompra} 
                style={{
                    padding: "10px",
                    marginTop: "10px",
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}
            >
                Comprar
            </button>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
