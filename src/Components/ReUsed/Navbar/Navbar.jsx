import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const handleLogout = () =>{
    logOutUser()
    .then(()=>{
      console.log('log Out Successfully')
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const navItems = <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-pink-800" : ""
      }
    >Home
    </NavLink>
    <NavLink
      to="/features"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-pink-800" : ""
      }
    >Features
    </NavLink>
    <NavLink
      to="/employers"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-pink-800" : ""
      }
    >Employers
    </NavLink>
    {
      user ? '' : <NavLink
      to="/registration"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-pink-800" : ""
      }
    >Registration
    </NavLink>
    }
  </>
  return (
    <div className="bg-[#db6cdd59] pt-2 pb-2">
      <div className="flex-row lg:flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="pl-20 md:pl-64 lg:pl-0 flex gap-3 items-center">
          <img className="w-20" src="https://i.ibb.co/2sTBp4t/baby-log.png" alt="" />
          <div>
            <h3 className="text-2xl text-pink-700 font-bold">Baby Care</h3>
            <h3 className="text-2xl text-[#1b6b63] font-bold">Service</h3>
          </div>
        </div>
        <div>
          {
            user ? <ul className="flex pl-14 md:pl-44 lg:pl-0 my-4 lg:my-0 gap-4 md:gap-16 lg:gap-16 text-2xl font-semibold">
            {navItems}
          </ul>
          :
          <ul className="flex pl-14 md:pl-12 lg:pl-0 my-4 lg:my-0 gap-4 md:gap-16 lg:gap-16 text-2xl font-semibold">
            {navItems}
          </ul>
          }
        </div>
        {
          user ? <div className="flex justify-center items-center gap-3 md:gap-16 lg:gap-3">
            <h2 className="text-xl font-semibold font-mono text-[#1e654f]">{user.displayName}</h2>
            <Link to={'/login'}><button onClick={handleLogout} className="text-xl px-6 py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f] font-bold">Log Out</button></Link>
            <img className="w-16 h-16 rounded-full" src={user.photoURL}></img>
          </div>
            :
            <div className="md:pl-80 lg:pl-0">
              <Link to={'/login'}><button className="text-xl px-6 py-2 text-white bg-[#e448a0] rounded-lg hover:bg-[#b53a7f]">Login</button></Link>
            </div>
        }
        
      </div>
    </div>
  );
};

export default Navbar;