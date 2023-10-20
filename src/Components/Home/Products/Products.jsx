import { useState } from "react";
import Product from "./Product/Product";
import { useLoaderData } from "react-router-dom";


const Products = () => {

    const products = useLoaderData()
    console.log(products)
    const [showProduct, setShowProduct] = useState(products?.slice(0,6))

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-2xl font-medium my-3">Just For You</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
                {
                    showProduct?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button onClick={()=>setShowProduct(products)} className={`${showProduct.length >= 7 ? "hidden":"block"} mx-auto text-xl text-[#2c2cff] font-medium py-2 px-6 rounded-md my-5 border border-[#2c2cff]`}>load More</button>
        </div>
    );
};

export default Products;