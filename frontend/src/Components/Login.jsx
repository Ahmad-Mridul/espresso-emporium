import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

const Login = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/login") {
            document.body.style.backgroundColor = "#372727";
        } else {
            document.body.style.backgroundColor = ""; // Reset when leaving
        }

        return () => {
            document.body.style.backgroundColor = ""; // Cleanup when unmounting
        };
    }, [location.pathname]);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl m-20">
            <div className="card-body">
            <h2 className="card-title text-3xl mx-auto">Login to your account</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <input type="submit" className="btn btn-neutral mt-4" value="Login"></input>
                    </fieldset>
                </form>
                <p>Don't have an account? <NavLink to="/register" className="text-red-400">Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;