import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillGithub, AiFillGoogleCircle, AiFillGooglePlusSquare } from "react-icons/ai";

const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleLogin, githubLogin, userCurrentPath } = useContext(AuthContext);


    const handleSocialLogin = (media) => {
        media()
            .then(()=>{
                toast.success('Login successfully !', {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                navigate(userCurrentPath? userCurrentPath:"/")}
            )
            .catch(error => {console.log(error)
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