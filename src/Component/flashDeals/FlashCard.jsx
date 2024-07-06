import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importing heart icons for visual representation
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../RTK/Cart";

// Component for the next arrow in the slider
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

// Component for the previous arrow in the slider
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

// Main component for displaying product items in a slider
export default function FlashCard() {


  // Mange State From ReduxtoolKit (addToCart) //
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };






  // Mange State From ReduxtoolKit 
  const productItems = useSelector((state) => state.flash);

  // State to manage favourites
  const [favourites, setFavourites] = useState({});
  // Function to toggle favourite status
  const toggleFavourite = (id) => {
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [id]: !prevFavourites[id],
    }));
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem, index) => {
          // Check if the current item is marked as favourite
          const isFavourite = favourites[productItem.id] || false;
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItem.discount}% Off</span>
                  <img src={productItem.cover} alt="" />
                  <div
                    className={`product-like ${isFavourite ? "is-favourite" : ""
                      }`}
                    onClick={() => toggleFavourite(productItem.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {isFavourite ? (
                      <FaHeart
                        style={{ color: "black", opacity: "1 !important" }}
                      />
                    ) : (
                      <FaRegHeart />
                    )}
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </div>
                  <div className="price">
                    <h4>${productItem.price}.00 </h4>
                    <button onClick={() => handleAddToCart(productItem)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
