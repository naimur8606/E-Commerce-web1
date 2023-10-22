import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillGithub, AiFillGoogleCircle, AiFillGooglePlusSquare } from "react-icons/ai";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleLogin, githubLogin, userCurrentPath } = useContext(AuthContext);
    const [useAlert, setUseAlert] = useState(true)

    const handleSocialLogin = (media) => {
        media()
            .then((req) => {
                const email = req?.user?.email;
                const user = { email, cartProduct: [] };
                fetch(`https://sob-dokander-server.vercel.app/user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            setUseAlert(true)
                        }
                    })
                if (useAlert) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(userCurrentPath ? userCurrentPath : "/")
            }
            )
            .catch(error => {
                console.log(error)
                toast.error(error)

            })
    }

    return (
        <>
            <div className="divider">continue with<ToastContainer></ToastContainer></div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="flex border border-[#fd4520] text-[#f66f54] py-1 px-2 rounded"><AiFillGoogleCircle className="text-2xl"></AiFillGoogleCircle> Google</button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="flex border border-[#251655] text-[#3a2c8c] py-1 px-2 rounded"><AiFillGithub className="text-2xl"></AiFillGithub> Github</button>
            </div>
        </>
    );
};

export default SocialLogin;