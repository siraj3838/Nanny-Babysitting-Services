import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

const Registration = () => {
    const { createUser, googleLoginUser } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const [createSuccess, setCreateSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const registrationHandle = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        setPasswordError('')
        if (password.length < 6) {
            setPasswordError('At least 6 or more characters Please');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError('password most be one uppercase characters');
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('At least one special characters');
            return;
        }
        createUser(email, password)
            .then(response => {
                console.log(response.user)
                setCreateSuccess('Registration SuccessFully');
                updateProfile(response.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        window.location.reload()
                        toast.success('Registration SuccessFully');
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const googleLogin = () => {
        googleLoginUser()
            .then(response => {
                navigate(location.state ? location?.state : '/')
                console.log(response.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="mt-5 bg-[#F3F3F3]">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="py-5 rounded-md" data-aos="flip-right" data-aos-duration="2200">
                <div className="bg-white px-24 w-full lg:w-[600px] mx-auto py-5 shadow-2xl">
                    <h3 className="text-4xl font-semibold font-serif text-center">Register your account</h3>
                    <hr className="my-4" />
                    <form onSubmit={registrationHandle}>
                        <div className="form-control w-full px-5 mb-3">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your Name</span>

                            </label>
                            <input type="text" name="name" placeholder="Enter your name" required className="input rounded-md w-full mt-2 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo URL</span>

                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5 my-3">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>

                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" required className="input rounded-md w-full mt-2 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>

                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name="password" required className="input rounded-md w-full mt-2 bg-[#F3F3F3] py-7" />
                            <h2 className="cursor-pointer text-2xl absolute mt-[70px] ml-40 md:ml-[490px] lg:ml-[330px]" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h2>

                        </div>
                        {
                            passwordError && <p className="text-red-800 text-lg font-medium text-center">{passwordError}</p>
                        }
                        {
                            createSuccess && <p className="text-green-700 text-lg font-medium text-center">{createSuccess}</p>
                        }
                        <div className="w-full mt-8 px-5">
                            <input className="bg-[#403F3F] text-white text-xl font-semibold w-full py-4 rounded-md" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="text-center">or</p>
                    <div className="w-full lg:w-[368px] mx-auto">
                        <button onClick={googleLogin} className="bg-[#30a4a6] hover:bg-[#29898b] mt-3 text-white w-full text-xl font-semibold py-3 rounded-md">Google Login</button>
                    </div>
                    <h3 className="text-center mt-8 text-base font-semibold">Already Have An Account ? <Link to={'/login'}><span className="text-[#FF8C47]">Login</span></Link></h3>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Registration;