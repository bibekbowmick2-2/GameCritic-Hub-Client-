import React, { useContext } from 'react';
import loginbg from '../../assets/loginbg.jpg'
import { ContextProvider } from '../AuthProviders/AuthProvider';
const Login = () => {
    const {signInUser} =useContext(ContextProvider);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log("ERROR:",error)
        })

    }
    return (
        <div style={{ backgroundImage: `url(${loginbg})`,backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right'}}  className='min-h-[600px] pt-[50px] px-4 lg:min-h-[800px] lg:pt-[30px] relative'>
            <div className=" hero opacity-90 bg-base-200 w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl">
                <div className="hero-content max-w-sm flex-col">
                <h1 className='text-3xl'>Login</h1>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body max-w-md mx-auto lg:max-w-6xl" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;