import bg from "../assets/header_bg.png"
const Footer = () => {
    return (
        <div className="flex items-center justify-center" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",// Adjust height as needed
            width: "100%" // Ensures full width
        }}>
            <a className="cursor-pointer text-white font-rancho md:text-2xl py-4 text-center">Copyright Espresso Emporium ! All Rights Reserved</a>
        </div>
    );
};

export default Footer;
