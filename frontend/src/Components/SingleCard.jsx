import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const SingleCard = ({coffee, coffees, setCoffees}) => {
    const { _id, name, photo, chef, taste } = coffee;
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`https://espresso-emporium-server-opal.vercel.app/coffees/${_id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    if (result.isConfirmed) {
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                        });
                    }
                    const remaining = coffees.filter(coffee=> coffee._id!==_id);
                    setCoffees(remaining);
                }
            })
        });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
            <figure>
                <img
                src={photo}
                alt={name}
                />
            </figure>
            <div className="flex justify-between w-full md:px-10">
                <div className="flex items-center justify-center">
                    <div>
                        <p>Name: {name}</p>
                        <p>Chef: {chef}</p>
                        <p>Taste: {taste}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="join join-vertical space-y-2">
                        <NavLink to={`/coffees/${_id}`} className="btn join-item"><FaEye /></NavLink>
                        <NavLink to={`/updateCoffee/${_id}`}className="btn join-item" ><MdEditSquare /></NavLink>
                        <button onClick={()=>handleDelete(_id)} className="btn join-item"><RiDeleteBin6Line /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
