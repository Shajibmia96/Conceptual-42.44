import { useLoaderData } from "react-router-dom";
import ProductCard from "../PorductCard/ProductCard";

const Products = () => {
    const {products} = useLoaderData()
    // console.log(products)
     
    return (
        <div >
            <h3 className=" text-3xl text-center mt-10 font-bold">We are <span className="text-orange-400">show here</span> various products</h3>

            <div className="grid grid-cols-3 gap-4 container mx-auto mt-10">
            {
                products.map ( product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
            </div>

        </div>
    );
};

export default Products;