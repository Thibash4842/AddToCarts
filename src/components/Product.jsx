import React, { useContext } from 'react';
import '../cssfiles/Product.css';
import { cartContext } from '../App';
import { BsFillCartPlusFill, BsFillCartXFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const Product = ({product}) => {
    const {cart,setCart} =useContext(cartContext);
    const name = product.name.length > 21 ? product.name.substring(0,20)+".." : product.name;

    const addCart = () =>{
        setCart([...cart,product]);
    };
    const removeCart = () =>{
        setCart(cart.filter((c) => c.id !== product.id));
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    console.log(product)
    return (
        <div className='product' >
            <div className="offer">{`${product.offer}% Off`}</div>
            <div className="img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Price Rs : 
                    <del>&#8377;{product.price}</del>
                    <b> &#8377;{product.price-(product.price*product.offer/100).toFixed()}</b>
                </p>
                {cart.includes(product) ? (
                    <button className='remove-btn' onClick={removeCart}>Remove from Cart <BsFillCartXFill className='icon'/></button>
                    ):(
                    <button onClick={addCart}>Add to Cart <BsFillCartPlusFill className='icon'/></button>
                )}

                <ReactStars count={5} onChange={ratingChanged} size={28} activeColor="#ffd700" />
            </div>
        </div>
    )
}

export default Product;
