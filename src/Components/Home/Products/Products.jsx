
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Product from "./Product/Product";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Products = () => {
    const Products = useLoaderData()
    const navigate = useNavigate()
    
    // console.log(Products)
    const {user} = useContext(AuthContext)
    const email = user?.email
    // console.log(email)
    const [showProduct, setShowProduct] = useState(Products?.slice(0,6))
    const [selectProduct, setSelectProduct] = useState([])
    useEffect(()=>{
        fetch(`https://sob-dokander-server.vercel.app/user/${email}`)
        .then(res => res.json())
        .then(data => setSelectProduct(data?.cartProduct))
        .catch(err => console.log(err))
    },[email])
    const updateCart = async(item) => {
        if(!user){
            navigate("/login")
        }else{
            const errorItem = selectProduct?.find(product => product?._id === item?._id)
            if(errorItem){
                Swal.fire({
                    title: 'Sorry!',
                    text: 'This Product already Selected',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            }else{
                const cartProduct= [...selectProduct,item]
                setSelectProduct(cartProduct)
                // console.log(cartProduct)
                const User = {email, cartProduct}
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
                        if(data.matchedCount){
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
    }

    
    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-2xl font-medium my-3">Just For You</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
                {
                    showProduct?.map((product, idx) => <Product 
                    updateCart={updateCart} 
                    key={idx} 
                    product={product}></Product>)
                }
            </div>
            <button onClick={()=>setShowProduct(Products)} className={`${showProduct.length >= 7 ? "hidden":"block"} mx-auto text-xl text-[#2c2cff] font-medium py-2 px-6 rounded-md my-5 border border-[#2c2cff]`}>load More</button>
        </div>
    );
};

export default Products;