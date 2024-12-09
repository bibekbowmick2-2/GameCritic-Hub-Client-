
import React from "react";
import "./CustomerSection.css";
// import caro4 from '../../assets/caro-2 (3).jpg'

const testimonials = [
  {
    img: "../../assets/pic-1.jpg",
    quote:
      "We had a great time collaborating with the Filament team. They have my high recommendation!",
    author: "- Marnus Stephen",
  },
  {
    img: "../../assets/pic-2.jpeg",
    quote:
      "The team drastically improved our product's user experience & increased our business outreach.",
    author: "- Andrew Jettpace",
  },
  {
    img: "../../assets/pic-3.jpg",
    quote:
      "I absolutely loved working with the Filament team. Complete experts at what they do!",
    author: "- Stacy Stone",
  },
];

const AllReview = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="container__left">
          <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button>
        </div>
        <div className="container__right">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <img src={testimonial.img} alt="user" />
              <div className="card__content">
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <div className="card__details">
                  <p>{testimonial.quote}</p>
                  <h4>{testimonial.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AllReview;
