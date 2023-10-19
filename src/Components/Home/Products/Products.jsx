import Product from "./Product/Product";
import { useLoaderData } from "react-router-dom";


const Products = () => {

    const products = useLoaderData()
    console.log(products)

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-2xl font-medium my-3">Just For You</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
                {
                    products?.slice(0,6)?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;