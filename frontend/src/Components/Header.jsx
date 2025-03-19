import { NavLink } from "react-router";
import bg from "../assets/header_bg.png"
import logo from "../assets/logo1 1.png"
const Header = () => {
    return (
        <div className="flex items-center justify-center" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",// Adjust height as needed
            width: "100%" // Ensures full width
        }}>
            <NavLink to="/"><img src={logo} alt="" className="cursor-pointer md:w-[100px] w-[50px] py-4"/></NavLink>
            <NavLink className="cursor-pointer text-white font-rancho text-3xl md:text-6xl" to="/">Espresso Emporium</NavLink>
        </div>
    );
};

export default Header;
