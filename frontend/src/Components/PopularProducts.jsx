import { NavLink } from "react-router";

const PopularProducts = () => {
    return (
        <div className="text-center py-[120px]">
            <p>--- Sip & Savor ---</p>
            <h2>Our Popular Products</h2>
            <NavLink to="/add-coffee" className="btn btn-info">Add Cofffee</NavLink>
            <div className="md:grid grid-cols-2 w-10/12 mx-auto pt-4 space-y-2">
                <div className="card card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;