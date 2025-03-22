import { NavLink, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const updateCoffee = useLoaderData();
    const navigate = useNavigate();
    const {_id,name,chef,supplier,taste,category,details,photo} = updateCoffee;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,chef,supplier,taste,category,details,photo};
        fetch(`https://espresso-emporium-server-opal.vercel.app/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{                
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Your Coffee has beed updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }
    return (
        <div className="md:w-10/12 mx-auto py-10">
            <NavLink className="btn bg-[#D2B48C] my-4 hover:bg-amber-300" to={navigate(-1)}>Back to home</NavLink>
            <div className="bg-[#F4F3F0] md:p-10 p-4">
                <h2 className="text-center text-3xl font-rancho">Update <span className="font-bold">{name}</span></h2>
                <form className="space-y-4" onSubmit={handleUpdate}>
                    {/* row-1 */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Coffee Name</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="name"  className="input input-bordered w-full" defaultValue={name} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Chef</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="chef"  className="input input-bordered w-full" defaultValue={chef} />
                            </label>
                        </div>
                    </div>
                    {/* row-2 */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Supplier</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="supplier"  className="input input-bordered w-full" defaultValue={supplier} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Taste</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="taste"  className="input input-bordered w-full" defaultValue={taste} />
                            </label>
                        </div>
                    </div>
                    {/* row-1 */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Category</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="category"  className="input input-bordered w-full" defaultValue={category} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Details</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="details"  className="input input-bordered w-full" defaultValue={details} />
                            </label>
                        </div>
                    </div>
                    {/* row-1 */}
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Photo</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="photo"  className="input input-bordered w-full" defaultValue={photo} />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Coffee" className="btn bg-[#D2B48C] w-full text-2xl font-rancho hover:bg-amber-300" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;