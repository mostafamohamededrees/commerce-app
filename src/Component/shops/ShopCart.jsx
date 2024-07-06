
import React, { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../RTK/Cart";

const ShopCart = () => {

    // Mange State From ReduxtoolKit (addToCart, decreaseQty) // 
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // Mange State From ReduxtoolKit (addToCart) //


    // Manage State From ReduxtoolKit
    const shopItems = useSelector((state) => state.shop);

    // State to manage favourites
    const [favourites, setFavourites] = useState({});

    // Function to toggle favourite status
    const toggleFavourite = (id) => {
        setFavourites((prevFavourites) => ({
            ...prevFavourites,
            [id]: !prevFavourites[id],
        }));
    };

    return (
        <>
            {shopItems.map((shopItems, index) => {
                const isFavourite = favourites[shopItems.id] || false;

                return (
                    <div className='box' key={index}>
                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'>{shopItems.discount}% Off</span>
                                <img src={shopItems.cover} alt='' />
                                <div
                                    className={`product-like ${isFavourite ? "is-favourite" : ""
                                        }`}
                                    onClick={() => toggleFavourite(shopItems.id)}
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
                            <div className='product-details'>
                                <h3>{shopItems.name}</h3>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>${shopItems.price}.00 </h4>

                                    <button onClick={() => handleAddToCart(shopItems)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ShopCart
