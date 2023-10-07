import { Link } from "react-router-dom";
import Navbar from "../../Components/ReUsed/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const registrationHandle = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(response => {
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
            <div className="py-5 rounded-md">
                <div className="bg-white px-24 w-[600px] mx-auto py-5">
                    <h3 className="text-4xl font-semibold text-center">Register your account</h3>
                    <hr className="my-4" />
                    <form onSubmit={registrationHandle}>
                        <div className="form-control w-full px-5 mb-3">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your Name</span>

                            </label>
                            <input type="text" name="name" placeholder="Enter your name" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5 my-3">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>

                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control w-full px-5">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>

                            </label>
                            <input type="password" placeholder="Enter your password" name="password" required className="input rounded-md w-full mt-4 bg-[#F3F3F3] py-7" />

                        </div>
                        <div className="form-control px-5 mt-4">
                            <label className="label cursor-pointer">
                                <input type="checkbox" required className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className="w-full mt-8 px-5">
                            <input className="bg-[#403F3F] text-white w-full py-4 rounded-md" type="submit" value="Register" />
                        </div>
                    </form>
                    <h3 className="text-center mt-8 text-base font-semibold">Already Have An Account ? <Link to={'/login'}><span className="text-[#FF8C47]">Login</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Registration;