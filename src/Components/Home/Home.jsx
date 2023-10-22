import FlashSale from "./FlashSale/FlashSale";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <FlashSale></FlashSale>
            <Products></Products>
        </div>
    )
};

export default Home;