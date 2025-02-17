import Sale from "./Sale";

const SalesList = (props) => {
    return (
        <ul>
            {props.sales.map((sale) => (
                <Sale
                    key={sale._id}
                    _id={sale._id}
                    saleId={sale._id}
                    productName={sale.productName}
                    customerName={sale.customerName}
                    saleDate={sale.saleDate}
                    totalAmount={sale.totalAmount}
                    customerId={sale.customerId}
                />
            ))}
        </ul>
    );
}

export default SalesList;
