import React from 'react';
import Card1 from '../../assets/Card-1 (2).png'
const Card = ({reviews}) => {
    
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available</p>;
  }

    
    return (
        <div className="container__right">
        {reviews.map((review, index) => (
          <div key={index} className="card">
            <div class="avatar">
              <div class="w-12">
                <img src={review?.thumbnail} alt="" />
              </div>
            </div>

            <p className=''>{review?.publishing_year}</p>
            <div className="card__content ">
              <p>{review?.rating}</p>
              <p >{review?.genre}</p>
              
              <span>
                <i className="ri-double-quotes-l"></i>
              </span>
              
            </div>
            <div className="card__details">
                <p>{review?.description}</p>
                <h4 className='ml-72'>Written By:{review?.name}</h4>
              </div>
          </div>
        ))}
      </div>
    );
};

export default Card;