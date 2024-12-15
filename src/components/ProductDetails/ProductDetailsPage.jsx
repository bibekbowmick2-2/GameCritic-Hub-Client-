import React from "react";
import "./ProductDetailsPage.css";
import dragonbg from '../../assets/shoe_1.jpg'

const ProductDetailsPage = () => {
  return (
    <div className="card1-wrapper">
      <div className="card1 card2">
        {/* Card Left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={dragonbg} alt="Shoe 1" />
              {/* <img src="/shoes_images/shoe_2.jpg" alt="Shoe 2" />
              <img src="/shoes_images/shoe_3.jpg" alt="Shoe 3" />
              <img src="/shoes_images/shoe_4.jpg" alt="Shoe 4" /> */}
            </div>
          </div>
          <div className="img-select">
            {/* <div className="img-item">
              <a href="#" data-id="1">
                <img src={dragonbg} alt="Shoe 1" />
              </a>
            </div> */}
            
          </div>
        </div>

        {/* Card Right */}
        <div className="product-content">
          <h2 className="product-title text-color">Nike Shoes</h2>
          <a href="#" className="product-link">
            Visit Nike Store
          </a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="bg-white p-2 rounded-full ">4.7 (21)</span>
          </div>

          <div className="product-price">
            <p className="last-price text-color">
              Old Price: <span>$257.00</span>
            </p>
            <p className="new-price text-color">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2 className="text-slate-100">About this item:</h2>
            <p className="text-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p className="text-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit.
              Unde.
            </p>
            <ul className="text-color">
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>In Stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>

          <div className="social-links">
            <p className="text-color">Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f  text-green-400 "></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest text-green-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
