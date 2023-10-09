import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-300 py-5">
            <footer className="footer max-w-screen-xl mx-auto p-10 bg-base-300 text-base-content">
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
                    <div className="grid lg:grid-cols-3 gap-1 md:gap-4 text-3xl">
                        <a href="https://web.facebook.com/WKmohammad.sakil" className="text-blue-600 "><FaTwitterSquare></FaTwitterSquare></a>
                        <a href="https://youtube.com/@mohammadsakil4591?si=ppEKR47OjWtWTlfL" className="text-red-600 text-4xl"><FaYoutube></FaYoutube></a>
                        <a href="https://web.facebook.com/WKmohammad.sakil" className="text-blue-600"><FaFacebookSquare></FaFacebookSquare></a>
                    </div>
                </nav>
            </footer>
            <p style={{ borderTop: '2px solid gray' }} className="text-center pt-6 pb-10 mx-auto">Copyright <span>&#169;</span> 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;