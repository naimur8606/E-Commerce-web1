import { useLoaderData, useParams } from "react-router-dom";
import MyCarousel from "../Home/Carousel/MyCarousel";
import Product from "../Home/Products/Product/Product";
import { useState } from "react";

const CategoryHomePage = () => {
    const products = useLoaderData()
    console.log(products)
    const { categories } = useParams()
    const filterProduct = products.filter(product => product.category.slice(0,3) === categories.slice(0,3));
    const [showProduct, setShowProduct] = useState(filterProduct?.slice(0,6))
    return (
        <div className="w-11/12 mx-auto">
            <MyCarousel></MyCarousel>
            <h2 className="text-3xl font-medium text-center my-5">All Products For You</h2>
            <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
                {
                    showProduct?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button onClick={()=>setShowProduct(filterProduct)} className={`${filterProduct?.length <= 6 ? "hidden": showProduct.length >= 7 ? "hidden":"block"} mx-auto text-xl text-[#2c2cff] font-medium py-2 px-6 rounded-md my-5 border border-[#2c2cff]`}>load More</button>
        </div>
    );
};

export default CategoryHomePage;