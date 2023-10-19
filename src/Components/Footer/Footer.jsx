import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10  bg-slate-100 text-base-content rounded">
      <nav className="grid grid-flow-col gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/add-product"}>Add Product</Link>
        <Link to={"/cart"}>My Cart</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-2">
          <img className="h-24" src="https://i.ibb.co/W2v9fxs/sd-logo.png" alt="" />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Sob Dokander</p>
      </aside>
    </footer>
  );
};

export default Footer;