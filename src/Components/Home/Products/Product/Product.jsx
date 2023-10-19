
const Product = ({ product }) => {
    const { brand_name, btn, category, description, name, photo, price, rating } = product;
    console.log(product)
    return (
        <div className="border border-[#2c2cffc2] p-3 rounded-lg hover:shadow-lg">
            <img className="h-52 md:h-72 2xl:h-[450px] w-full rounded-md" src={photo} alt="" />
            <h4 className="text-xl my-2">{name}</h4>
            <h5>Brand: {brand_name}</h5>
            <div className="flex justify-between items-center text-2xl">
                <span className="text-orange-500 my-2 font-semibold">{price}</span>
                <span>{rating} ★</span>
            </div>
            <div className="flex justify-between gap-2">
                <button className="btn w-1/2 font-semibold bg-green-500 text-white hover:text-green-500">{btn}</button>
                <button className="btn w-1/2 font-semibold bg-blue-500 text-white hover:text-blue-500">Details</button>
            </div>
        </div>
    );
};

export default Product;