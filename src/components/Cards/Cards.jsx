import React,{ useEffect, useState } from 'react';
import Card from './Card';

const [games, setGames] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/games/highest-rated")
    .then((response) => response.json())
    .then((data) => setGames(data))
    .catch((error) => console.error("Error fetching games:", error));
}, []);
const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 bg-[#04020e] '>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default Cards;