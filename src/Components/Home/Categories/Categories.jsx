
import { Link } from "react-router-dom";


const Categories = () => {


    return (
        <div className="w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5 my-8">
           
                    <Link to={"/Fashion"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Fashion-Apparel</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/vvgwFvv/Categori-1.jpg" alt="" />
                    </Link>
                    <Link to={"/Electronics"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Electronics-Gadgets</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/wrjVhrC/Categori-2.webp" alt="" />
                    </Link>
                    <Link to={"/HomeMakeover"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Home-Makeover</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/1dwdV9v/Categori-3.jpg" alt="" />
                    </Link>
                    <Link to={"/Sports"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Sports-Outdoors</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/89mg04h/Categori-4.jpg" alt="" />
                    </Link>
                    <Link to={"/Books-Stationery"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Books-Stationery</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/7yNHbrt/Categori-5.jpg" alt="" />
                    </Link>
                    <Link to={"/Groceries"}className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">Groceries-Food</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src="https://i.ibb.co/fCsdTD3/Categori-6.jpg" alt="" />
                    </Link>
            
        </div>
    );
};

export default Categories;