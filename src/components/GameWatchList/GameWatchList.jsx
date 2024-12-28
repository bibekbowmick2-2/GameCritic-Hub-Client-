import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../AuthProviders/AuthProvider';
import GameWatchListData from './GameWatchListData';

const GameWatchList = () => {
    
  const navigate = useNavigate();
  const {user} = useContext(ContextProvider);
 
  const [error, setError] = useState("");

  const  products = useLoaderData();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMyReviews = async () => {
      if (!user?.email) return;

      
      try {
        const response = await fetch(`http://localhost:5000/watchlist?email=${user.email}`);
        console.log(user.email)
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
     setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMyReviews();
  }, [user]);
    return (
        <div>
           <GameWatchListData items={items}/>
        </div>
    );
};

export default GameWatchList;