import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
import Products from "./Products/Products";

const Home = () => {

    return (
        <div className="bg-white">
            <Banner></Banner>
            <Categories></Categories>
            <FlashSale></FlashSale>
            <Products></Products>
        </div>
    );
};

export default Home;