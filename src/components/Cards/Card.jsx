import React from 'react';
import Card1 from '../../assets/Card-1 (2).png'
const Card = () => {
    return (
        <div className='mx-auto pt-5 border-2 border-gray-900'>
            <div className="card bg-[#04020e70] w-70 shadow-xl rounded-none">
                <figure className='w-5/6 skew-x-[-10deg] mx-auto'>
                    <img
                        src={Card1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Bloodborne - First Try!</h2>
                    <p>Gus sits with his own motion. I don't know when, or how, I don't know what. That I know, it's torture. He is powerless to stop his own.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-accent">Explore Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;