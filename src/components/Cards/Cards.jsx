import React from 'react';
import Card from './Card';
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