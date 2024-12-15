import React,{ useEffect, useState } from 'react';
import Card from './Card';


// useEffect(() => {
//   fetch("http://localhost:5000/games/highest-rated")
  
//     .then((response) => response.json())
//     .then((data) => setGames(data))
//     .catch((error) => console.error("Error fetching games:", error));
// }, []);
const Cards = ({games}) => {

    // const {name,description,picture,ratin} = games;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 bg-[#04020e] '>
        {
            games.map(game =>
                <div className='mx-auto pt-5 border-2 border-gray-900'>
            <div className="card bg-[#3f3a5b70] w-70 shadow-xl rounded-none">
                <figure className='w-5/6 skew-x-[-10deg] mx-auto'>
                    <img
                        src={game.picture}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{game.name}</h2>
                    <p>{game.description}</p>
                    <p>Rating: {game.ratin}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-accent">Explore Detailsss</button>
                    </div>
                </div>
            </div>
        </div>
            )
        }
            
        </div>
    );
};

export default Cards;