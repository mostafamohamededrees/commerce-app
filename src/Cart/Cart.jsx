import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQty, deleteCart } from '../RTK/Cart';

export default function Cart() {

    // Mange State From ReduxtoolKit (addToCart, decreaseQty) // 
    const dispatch = useDispatch();
    const CartItem = useSelector((state) => state.cart.items);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseQty = (id) => {
        dispatch(decreaseQty(id));
    };
    const handleDelateCart = (id) => {
        dispatch(deleteCart(id));
    };
    
    // Mange State From ReduxtoolKit (addToCart, decreaseQty) //

    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="cart-items background">
                <div className="container d_flex">
                    <div className="cart-details">
                        {CartItem.length === 0 && <h1 className='no-items product cart-list '>No Items are add in Cart</h1>}
                        {
                            CartItem.map((item) => {
                                const productQty = item.price * item.qty
                                console.log(productQty)
                                return (
                                    <div className='cart-list product d_flex' key={item.id}>
                                        <div className='img'>
                                            <img src={item.cover} alt='' />
                                        </div>
                                        <div className='cart-details'>
                                            <h3>{item.name}</h3>
                                            <h4>
                                                ${item.price}.00 * {item.qty}
                                                <span>${productQty}.00</span>
                                            </h4>
                                        </div>
                                        <div className='cart-items-function'>
                                            <div className='removeCart'>
                                                <button onClick={()=> handleDelateCart(item.id)} >
                                                    <i className='fa-solid fa-xmark'></i>
                                                </button>
                                            </div>

                                            <div className='cartControl d_flex price'>
                                                <button className='incCart' onClick={() => handleAddToCart(item)}>
                                                    <i className='fa-solid fa-plus'></i>
                                                </button>
                                                <button className='desCart' onClick={() => handleDecreaseQty(item.id)}>
                                                    <i className='fa-solid fa-minus'></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className='cart-item-price'></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='cart-total product'>
                        <h2>Cart Summary</h2>
                        <div className=' d_flex'>
                            <h4>Total Price :</h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
