import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

const Home = () => {

    return (
        <div className="bg-white">
            <Banner></Banner>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;