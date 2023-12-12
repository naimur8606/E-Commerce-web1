import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Home/Products/Product/Product";
import MyCarousel from "../Carousel/MyCarousel";


const CategoryHomePage = () => {
    const Products = useLoaderData();
    console.log(Products)
    console.log(Products[10].category)
    const {categories} = useParams()
    console.log(categories)
    const categoryProducts = Products?.filter(product => product.category?.slice(0,3) === categories?.slice(0,3))
    console.log(categoryProducts)
    return (
        <div className="w-11/12 mx-auto">
            <MyCarousel></MyCarousel>
            <h2 className="text-3xl font-medium text-center my-5">All Products For You</h2>
            <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">

                {
                    categoryProducts?.map((product, idx) => <Product key={idx} product={product}></Product>)
                }

            </div>

        </div>
    );
};

export default CategoryHomePage;