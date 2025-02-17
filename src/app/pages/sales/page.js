"use client"; 

import { useState, useEffect } from "react";
import SalesList from "./SalesList";
import mockSales from "./mockSales"; 

const SalesPage = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            console.log(mockSales);
            setSales(mockSales);
        }, 500)
        
    }, []);

    return (
        <div>
            <SalesList sales={sales} />
        </div>
    );
};

export default SalesPage;
