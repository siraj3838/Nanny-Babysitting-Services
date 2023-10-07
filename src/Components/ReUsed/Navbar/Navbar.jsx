import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Home
</NavLink>
    <NavLink
  to="/features"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Features
</NavLink>
    <NavLink
  to="/services"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Services
</NavLink>
    <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>About
</NavLink>
    </>
    return (
        <div className="bg-[#db6cdd55] pt-2 pb-2">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="flex gap-3 items-center">
                    <img className="w-20" src="https://i.ibb.co/2sTBp4t/baby-log.png" alt="" />
                <div>
                    <h3 className="text-2xl text-pink-700 font-bold">Baby Care</h3>
                    <h3 className="text-2xl text-[#1b6b63] font-bold">Service</h3>
                </div>
                </div>
                <div>
                    <ul className="flex gap-16 text-2xl font-semibold">
                    {navItems}
                    </ul>
                </div>
                <div>
                    <Link to={'/login'}><button className="text-2xl px-6 py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f]">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;