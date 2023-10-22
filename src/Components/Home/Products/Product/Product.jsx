import { Link } from "react-router-dom";

const Product = ({ product, updateCart }) => {
    // console.log(product)
    const {_id, brand_name, description, name, photo, price, rating } = product;
    return (
        <div className="border border-[#2c2cffc2] p-3 rounded-lg hover:shadow-lg truncate">
            <img className="h-52 md:h-72 2xl:h-[450px] w-full rounded-md" src={photo} alt="" />
            <div>
                <h4 className="text-xl my-2">{name?.slice(0, 25)}...</h4>
                <h5>Brand: {brand_name}</h5>
                <div className="flex justify-between items-center text-2xl">
                    <span className="text-orange-500 my-2 font-semibold">$ {price}</span>
                    <span>{rating} ★</span>
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <button onClick={()=>updateCart(product)} className="btn w-[48%] font-semibold bg-green-500 text-white hover:text-green-500">Add to cart</button>
                <Link to={`/productDetails/${_id}`}  className="btn w-[48%] font-semibold bg-blue-500 text-white hover:text-blue-500">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Product;