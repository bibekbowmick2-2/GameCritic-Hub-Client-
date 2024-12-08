import React, { useContext } from 'react';
import dragonbg from '../../assets/dragonbg.jpg'
import { ContextProvider } from '../AuthProviders/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
const Registration = () => {
    const { createUser } = useContext(ContextProvider);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/login');
            })
            .catch(error => {
                console.log("ERROR:", error)
            })
    }
    return (
        <div style={{
            backgroundImage: `url(${dragonbg})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right'
        }} className='min-h-[900px] pt-[30px] px-4 lg:min-h-[800px] lg:pt-[30px] relative'>
            <div className=" hero opacity-90 bg-base-200 w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl">
                <div className="hero-content max-w-sm flex-col">
                    <h1 className='text-3xl'>Registration</h1>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body max-w-md mx-auto lg:max-w-6xl" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button type="submit" className="btn btn-primary">Registration</button>
                            </div>
                            <div className="form-control mt-2">
                                <button type="submit" className="btn btn-primary">Login with Google</button>
                            </div>
                            <p>Aready have an account? then click on <Link className='hover:text-red-300' to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;