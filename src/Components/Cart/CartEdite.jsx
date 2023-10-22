
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const CartEdit = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email
    // console.log(email)
    const [selectProduct, setSelectProduct] = useState([])
    useEffect(()=>{
        fetch(`https://sob-dokander-server.vercel.app/user/${email}`)
        .then(res => res.json())
        .then(data => setSelectProduct(data?.cartProduct))
        .catch(err => console.log(err))
    },[email])
    // console.log(email, selectProduct)
    const updateCart = (id) => {
        const cartProduct = selectProduct?.filter(item => item?._id !== id)
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
                            setSelectProduct(cartProduct)
                            Swal.fire({
                                title: 'Product removed from Cart!',
                                text: 'Best of luck',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
    }

    return (
        <div className="overflow-x-auto bg-white w-11/12 mx-auto my-5">
            <h3 className="text-2xl mb-5">User: {email}</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectProduct?.map((product, idx) => 
                        <tr key={idx}>
                                <td>{product?.name}</td>
                                <td>{product?.brand_name}</td>
                                <td>{product?.price}</td>
                                <td>
                                    <button onClick={()=>updateCart(product?._id)} className="btn border"> X </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CartEdit;