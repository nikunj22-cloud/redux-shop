// import {FaShoppingCart} from "react-icons/fa"
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);//cart item count dikhane k liye

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-7xl  ">

        <NavLink to="/">
          <div className="ml-8">
          <img src="../newlogo.png" className="h-16"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <IoMdCart className="text-4xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-blue-400 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white " //count joh ki icon pr h uski position or height width
                    >{cart.length}</span>//cart main item count krne k liye
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
