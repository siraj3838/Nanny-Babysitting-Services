import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

const Login = () => {
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, googleLoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const loginHandle = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginUser(email, password)
            .then(response => {
                Swal.fire(
                    'Thank You',
                    'Login Successfully',
                    'success'
                  )
                navigate(location?.state ? location.state : '/');
                console.log(response.user)
            })
            .catch(error => {
                console.log(error)
                setPasswordError(error.message)
            })
    }
    const googleLogin = () => {
        googleLoginUser()
            .then(response => {
                Swal.fire(
                    'Thank You',
                    'Login Successfully',
                    'success'
                  )
                navigate(location.state ? location?.state : '/');
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
            <div className="py-7 rounded-md">
                <div className="bg-white px-24 w-[600px] mx-auto py-8 shadow-2xl">
                    <h3 className="text-4xl font-semibold font-serif text-center">Login your account</h3>
                    <hr className="my-8" />
                    <form onSubmit={loginHandle}>
                        <div className="form-control w-full px-5 mb-6">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>

                            </label>
                            <input type="email" name="email" required placeholder="Enter your email address" className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>

                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" required placeholder="Enter your password" className="input relative rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />
                            <h2 className="cursor-pointer text-2xl absolute mt-[75px] ml-[330px]" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h2>

                        </div>
                        {
                            passwordError && <p className="text-xl text-red-700">{passwordError}</p>
                        }
                        <div className="w-full mt-5 px-5">
                            <input className="bg-[#4e4d4d] hover:bg-[#323232] text-white w-full py-3 text-xl font-semibold rounded-md" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center">or</p>
                    <div className="w-[368px] mx-auto">
                        <button onClick={googleLogin} className="bg-[#30a4a6] hover:bg-[#29898b] mt-3 text-white w-full text-xl font-semibold py-3 rounded-md">Google Login</button>
                    </div>
                    <h3 className="text-center mt-8 text-base font-semibold">Do not Have An Account ? <Link to={'/registration'}><span className="text-[#FF8C47]">Register</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;