import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Categories = () => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5 my-8">
            {
                categories?.map(category =>
                    <Link to={category.link} key={category._id} className="flex items-center justify-around border border-[#2c2cff] p-2 rounded-md">
                        <h4 className="text-xs md:text-xl">{category?.title}</h4>
                        <img className="h-10 md:h-14 w-12 md:w-16 rounded-xl" src={category?.photo} alt="" />
                    </Link>)
            }
        </div>
    );
};

export default Categories;