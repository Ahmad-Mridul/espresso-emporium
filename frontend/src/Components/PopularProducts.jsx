import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import SingleCard from "./SingleCard";
import { LiaMugHotSolid } from "react-icons/lia";
import bg from "../assets/header_bg.png"
const PopularProducts = () => {
    const [coffees,setCoffees] = useState([]);
    useEffect(()=>{
        fetch('https://espresso-emporium-server-opal.vercel.app/coffees')
        .then(res=>res.json())
        .then(data=>{
            setCoffees(data);
        })
    },[])
    return (
        <div className="text-center py-[120px]" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",// Adjust height as needed
                    width: "100%" // Ensures full width
                }}>
            <p className="font-raleway text-white">--- Sip & Savor ---</p>
            <h2 className="text-2xl md:text-6xl font-rancho text-white">Our Popular Products</h2>
            <NavLink to="/add-coffee" className="btn mt-4 mb-10 text-2xl font-rancho bg-[#E3B577] hover:bg-amber-300">Add Cofffee <LiaMugHotSolid /></NavLink>
            <div className="md:grid grid-cols-2 w-10/12 mx-auto pt-4 space-y-2 gap-4">
                {
                    coffees.map(coffee=><SingleCard setCoffees={setCoffees} coffee={coffee} coffees={coffees} key={coffee._id}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;