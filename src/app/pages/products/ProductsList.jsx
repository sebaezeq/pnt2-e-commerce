import "./product.css";
import Product from "./Product";

const ProductsList = (props) => {
    return (
        <ul>
            {props.products.map((producto) => (
                <Product
                    key={producto._id}
                    _id={producto._id}
                    image={producto.image}
                    name={producto.name}
                    description={producto.description}
                    price={producto.price}
                />
            ))}
        </ul>
    );
};

export default ProductsList;
