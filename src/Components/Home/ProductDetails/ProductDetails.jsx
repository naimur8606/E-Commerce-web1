import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, brand_name, description, name, photo, price, rating } = product;
    console.log(product)
    return (
        <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
            <img className="h-[70vh] w-2/5" src={photo} alt="" />
            <div className="w-[55%]">
                <h3 className="text-3xl font-semibold my-2">{name}</h3>
                <h4 className="text-xl font-medium">Brand: {brand_name}</h4>
                <div className="flex justify-between items-center text-2xl w-2/3">
                    <span className="text-orange-500 my-2 font-semibold">Price: ${price}</span>
                    <span>Ratting: {rating} ★</span>
                </div>
                <p><span className="font-semibold">Description:</span> {description}</p>
                <div className="flex justify-between gap-2 my-5">
                    <button className="btn w-[48%] font-semibold bg-green-500 text-white hover:text-green-500">Add to cart</button>
                    <Link to={`/update-product/${_id}`} className="btn w-[48%] font-semibold bg-blue-500 text-white hover:text-blue-500">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;