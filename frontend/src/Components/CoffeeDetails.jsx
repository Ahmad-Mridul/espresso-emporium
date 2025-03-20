import { NavLink, useLoaderData, useNavigate } from "react-router";

const CoffeeDetails = () => {
    const singleCoffee = useLoaderData();
    const navigate = useNavigate();
    const {photo,chef,taste,name,supplier,category,details}=singleCoffee;   
    return (
        <div className="md:w-10/12 mx-auto py-10">
            <NavLink className="btn bg-[#D2B48C] my-4 hover:bg-amber-300" to={navigate(-1)}>Back to home</NavLink>
            <div className="bg-[#F4F3F0] md:p-10 p-4">
            <div className="card card-side bg-[#F5F4F1] shadow-sm py-20">
                <figure>
                    <img
                    src={photo}
                    alt={name}
                    />
                </figure>
                <div className="flex justify-between w-full md:px-10">
                    <div className="flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl md:text-6xl font-rancho">Have a great sip</h2>
                            <p>Name: {name}</p>
                            <p>Chef: {chef}</p>
                            <p>Chef: {supplier}</p>
                            <p>Taste: {taste}</p>
                            <p>Taste: {category}</p>
                            <p>Taste: {details}</p>
                        </div>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <div className="join join-vertical space-y-2">
                            <NavLink to={`/coffees/${_id}`} className="btn join-item"><FaEye /></NavLink>
                            <button className="btn join-item"><MdEditSquare /></button>
                            <button className="btn join-item"><RiDeleteBin6Line /></button>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;