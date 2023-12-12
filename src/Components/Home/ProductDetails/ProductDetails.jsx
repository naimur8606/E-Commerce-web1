import { useContext, useEffect, useState } from "react";
import { Link,  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
// import { Carousel } from "react-responsive-carousel";

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://sob-dokander-server.vercel.app/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    console.log(id,product)

    const { user } = useContext(AuthContext)
    const email = user?.email
    // console.log(email)
    const [selectProduct, setSelectProduct] = useState([])
    useEffect(() => {
        fetch(`https://sob-dokander-server.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => setSelectProduct(data?.cartProduct))
            .catch(err => console.log(err))
    }, [email])
    const updateCart = async (item) => {

        const errorItem = selectProduct?.find(product => product?._id === item?._id)
        if (errorItem) {
            Swal.fire({
                title: 'Sorry!',
                text: 'This Product already Selected',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        } else {
            const cartProduct = [...selectProduct, item]
            setSelectProduct(cartProduct)
            // console.log(cartProduct)
            const User = { email, cartProduct }
            fetch('https://sob-dokander-server.vercel.app/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(User)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.matchedCount) {
                        Swal.fire({
                            title: 'Product add to Cart!',
                            text: 'Best of luck',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }

    }



    return (
        <div className="w-11/12 mx-auto py-5 flex flex-col md:flex-row justify-between items-center">
            <div className="md:h-[70vh] md:w-2/5" >
                <img className="w-[100%] h-[100%]" onClick={() => document.getElementById('my_modal_3').showModal()} src={product?.photo} alt="" />
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost text-3xl absolute right-3 top-3">✕</button>
                        </form>
                        <img className="" src={product?.photo} alt="" />
                    </div>
                </dialog>
            </div>
            <div className="md:w-[55%]">
                <h3 className="text-3xl font-semibold my-2">{product?.name}</h3>
                <h4 className="text-xl font-medium">Brand: {product?.brand_name}</h4>
                <div className="flex justify-between items-center text-2xl w-2/3">
                    <span className="text-orange-500 my-2 font-semibold">Price: ${product?.price}</span>
                    <span>Ratting:  {product?.rating}★</span>
                </div>
                <p><span className="font-semibold">Description:</span> {product?.description}</p>
                <div className="flex justify-between gap-2 my-5">
                    <button onClick={() => updateCart(product)} className="btn w-[48%] font-semibold bg-green-500 text-white hover:text-green-500">Add to cart</button>
                    {email === 'admin@gmail.com' && <details className="dropdown w-[48%]">
                        <summary className="btn w-full font-semibold bg-blue-500 text-white hover:text-blue-500">Update and Delete</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full text-center">
                            <li><Link to={`/update-product/${product?._id}`} className="">Update</Link></li>
                            <li><Link>Delete</Link></li>
                        </ul>
                    </details>}

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;