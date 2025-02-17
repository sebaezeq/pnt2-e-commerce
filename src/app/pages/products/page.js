"use client";

import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import mockProducts from "./mockProducts";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            console.log(mockProducts);
            setProducts(mockProducts);
        }, 500);
    }, []);

    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
