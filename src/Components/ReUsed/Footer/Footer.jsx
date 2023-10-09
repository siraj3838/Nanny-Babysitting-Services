import { Link } from "react-router-dom";
import { FaFacebookSquare,FaTwitterSquare,FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-300 py-5">
            <footer className="p-10 max-w-screen-xl mx-auto flex justify-between gap-10">
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to={'/features'}>Features</Link><br />
                    <Link to={'/employers'}>Employers</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to={'/'}>Home</Link><br />
                    <Link to={'/login'}>Login</Link><br />
                    <Link to={'/registration'}>Registration</Link>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://web.facebook.com/WKmohammad.sakil" className="text-blue-600 "><FaTwitterSquare></FaTwitterSquare></a>
                        <a href="https://youtube.com/@mohammadsakil4591?si=ppEKR47OjWtWTlfL" className="text-red-600 text-4xl"><FaYoutube></FaYoutube></a>
                        <a href="https://web.facebook.com/WKmohammad.sakil" className="text-blue-600"><FaFacebookSquare></FaFacebookSquare></a>
                    </div>
                </nav>
                <nav>
                    <img className="w-32" src="https://i.ibb.co/TbHtvyP/Pngtree-mother-infant-care-sign-3394166.png" alt="" />
                </nav>
            </footer>
        
            <p style={{borderTop: '2px solid gray'}} className="text-center pt-6 pb-10 max-w-lg mx-auto">Copyright <span>&#169;</span> 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;