import { useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData();
    console.log(product)
      const {title,id} =product;
    return (
        <div>
            <h1>{title}</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;