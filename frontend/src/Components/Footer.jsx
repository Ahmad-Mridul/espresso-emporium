import bg from "../assets/header_bg.png"
import footer_cup from "../assets/logo1 1.png"
import footer_bg from "../assets/footer_bg.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
    return (
        <>
            <div style={{
                backgroundImage:`url(${footer_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",// Adjust height as needed
                width: "100%", // Ensures full width
                padding: "20px" // Adjust padding as needed
            }}>
                <div className="md:grid grid-cols-12 w-10/12 mx-auto py-6 gap-4 space-y-4">
                    <div className="col-span-6 space-y-4">
                        <img src={footer_cup} alt="" />
                        <h2 className="text-3xl md:text-6xl font-rancho">Espresso Emporium</h2>
                        <p className="font-raleway">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className="flex">
                            <a href="#" className="py-2 text-3xl me-4"><FaFacebook /></a>
                            <a href="#" className="py-2 text-3xl me-4"><AiFillTwitterCircle /></a>
                            <a href="#" className="py-2 text-3xl me-4"><FaInstagram /></a>
                            <a href="#" className="py-2 text-3xl me-4"><FaLinkedin /></a>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-rancho">Get in Touch</h2>
                        <p className="flex gap-4"><BsTelephoneFill /> +88 01533 333 333</p>
                        <p className="flex gap-4"><IoMdMail /> info@gmail.com</p>
                        <p className="flex gap-4"><HiLocationMarker /> 72, Wall street, King Road, Dhaka</p>
                    </div>
                    <div className="col-span-6 flex items-center">
                        <div>
                            <h2 className="text-3xl md:text-6xl font-rancho">Connect with Us</h2>
                            <form action="" className="space-y-2">
                                <input type="text" name="name" className="input" placeholder="Name"/><br />
                                <input type="email" name="email" className="input" placeholder="Email"/><br />
                                <textarea className="textarea" placeholder="Bio"></textarea><br />
                                <input type="submit" value="Send Message" className="btn rounded-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",// Adjust height as needed
                width: "100%" // Ensures full width
            }}>
                <a className="cursor-pointer text-white font-rancho md:text-2xl py-4 text-center">Copyright Espresso Emporium ! All Rights Reserved</a>
            </div>
        </>
    );
};
// className="md:grid grid-cols-12 w-10/12 mx-auto py-6" 
export default Footer;
