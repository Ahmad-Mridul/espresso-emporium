import React from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from 'sweetalert2'

// or via CommonJS
const AddCoffee = () => {
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo};
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Your Coffe has beed added successfully',
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
                <h2 className="text-center text-3xl font-rancho">Add New Coffee</h2>
                <p className="text-center md:w-5/12 mx-auto font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* row-1 */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Coffee Name</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="name"  className="input input-bordered w-full" placeholder="Coffee Name" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Chef</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="chef"  className="input input-bordered w-full" placeholder="Chef Name" />
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
                                <input type="text" name="supplier"  className="input input-bordered w-full" placeholder="Enter coffee supplier" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Taste</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="taste"  className="input input-bordered w-full" placeholder="Enter coffee taste" />
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
                                <input type="text" name="category"  className="input input-bordered w-full" placeholder="Enter coffee category" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-2xl font-rancho">Details</span>
                            </label><br />
                            <label className="input-group">
                                <input type="text" name="details"  className="input input-bordered w-full" placeholder="Enter coffee details" />
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
                                <input type="text" name="photo"  className="input input-bordered w-full" placeholder="Enter photo URL" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C] w-full text-2xl font-rancho hover:bg-amber-300" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
