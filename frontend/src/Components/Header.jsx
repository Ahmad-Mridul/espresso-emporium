import { NavLink } from "react-router";
import bg from "../assets/header_bg.png"
import logo from "../assets/logo1 1.png"
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
    // const {user} = useContext(AuthContext);
    return (
        <div className="flex items-center justify-around" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",// Adjust height as needed
            width: "100%" // Ensures full width
        }}>
            <div className="flex items-center justify-center">
                <NavLink to="/"><img src={logo} alt="" className="cursor-pointer md:w-[100px] w-[50px] py-4"/></NavLink>
                <NavLink className="cursor-pointer text-white font-rancho text-3xl md:text-6xl" to="/">Espresso Emporium</NavLink>
            </div>
            <div className="">
                <div className="">
                    <NavLink to="/login" className="btn me-2">Login</NavLink>
                    <NavLink to="/register" className="btn">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
