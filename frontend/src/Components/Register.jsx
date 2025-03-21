import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const location = useLocation();
    const {createUser} = useContext(AuthContext);
    useEffect(() => {
        if (location.pathname === "/register") {
            document.body.style.backgroundColor = "#372727";
        } else {
            document.body.style.backgroundColor = ""; // Reset when leaving
        }

        // return () => {
        //     document.body.style.backgroundColor = ""; // Cleanup when unmounting
        // };
    }, [location.pathname]);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser={email,password};
        createUser(email, password)
        .then((result) => {
            console.log(result);
            
            fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("user created to db: ",data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Registrasion has completed successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl m-20">
            <div className="card-body">
                <h2 className="card-title text-3xl mx-auto">Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <input type="submit" className="btn btn-neutral mt-4" value="Register"></input>
                    </fieldset>
                </form>
                <p>Already have an account? <NavLink to="/login" className="text-red-400">Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;