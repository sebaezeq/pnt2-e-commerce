"use client";

import { useState, useEffect } from "react";
import Product from "../Product";
import mockProducts from "../mockProducts";

export default function DetalleProducto({ params }) {
    const { _id } = params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productoEncontrado = mockProducts.find((p) => p._id === _id);
        setProduct(productoEncontrado);
    }, [_id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <Product
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
        />
    );
}
