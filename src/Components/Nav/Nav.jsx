import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson, BsPersonX } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState(true)
    const SignOut = () => {
        logOut()
        .then(toast.error('Logout successfully!', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))
        .catch()
    }
    const items = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                }>
                Home
            </NavLink>
        </li>
        {user?.email === 'admin@gmail.com' && <li>
            <NavLink
                to="/add-product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                }>
                Add Product
            </NavLink>
        </li>}
        <li>
            <NavLink
                to='/cart'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                }>
                My Cart
            </NavLink>
        </li>
        <li className="dropdown dropdown-end">
            {user ?
                <div className="text-black flex items-center">
                    <BsPerson className="text-2xl mr-1.5"></BsPerson><button onClick={SignOut}>Logout</button>
                </div> :
                <div className="text-black flex items-center"><BsPersonX className="text-2xl mr-1.5"></BsPersonX>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                        }>
                        Login
                    </NavLink>
                </div>
            }

        </li>
    </>
    return (
        <div className="w-full bg-blue-400 fixed top-0 bg-opacity-30 z-50">
            <div className="w-11/12 mx-auto flex justify-between items-center py-1">
                <Link to={"/"}><img className="h-14 2xl:h-24" src="https://i.ibb.co/W2v9fxs/sd-logo.png" alt="" /></Link>

                <ul className={`absolute right-0 z-[1] duration-1000 bg-slate-50 lg:bg-[#0000] p-5 lg:p-0 lg:static rounded-l-lg lg:flex lg:w-[50%] text-lg 2xl:text-2xl lg:justify-around ${menu === false ? "top-12 md:top-12" : "-top-60"}`}>
                    {
                        items
                    }
                </ul>
                <div onClick={() => setMenu(!menu)} className='text-3xl lg:hidden'>
                    {menu === false ?
                        <AiOutlineClose></AiOutlineClose> :
                        <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Nav;