import React, { useEffect, useState, useContext } from 'react';
import '../cssfiles/Viewcart.css';
import { cartContext } from '../App';

const Viewcart = () => {
  const { cart,setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  // remove cart function
  const removeTask = (id)=>{
    setCart(cart.filter((item)=>item.id !== id));
  };
  
  useEffect(() => {
    // (product.price-(product.price*product.offer/100).toFixed()) * product.quantity
    setTotal(cart.reduce((acc, curr) => acc + (parseInt(curr.price-(curr.price*curr.offer/100))*curr.quantity),0));
  }, [cart]);

  // cart quantity handle decerement
  const handleDecrement = (cart_id) =>{
    setCart(cart => cart.map((item)=>
      cart_id === item.id ? {...item,quantity : item.quantity - (item.quantity > 1 ? 1 : 0)} : item));
  }
  // cart quantity handle incerement
  const handleIncrement = (cart_id) =>{
    setCart(cart => cart.map((item)=> 
      cart_id === item.id ? {...item,quantity : item.quantity + (item.quantity < 10 ? 1 : 0)} : item));
  }

  return (
    <main className={cart.length === 0 ? "cart-all bgcolor-gary" :'cart-all bgcolor-blue'}>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {
          cart.map((product) => (
            <aside className='cart-product' key={product.id}>
              <article className='image'>
                <img src={product.image} alt={product.name} />
              </article>
              <figcaption className='cart-product-details'>
                <article className='cart-details'>
                  <h3>{product.name}</h3>
                  <p>Price Rs : <b>&#8377;{product.price-(product.price*product.offer/100).toFixed()}</b></p>
                </article>
                <article className='add-cart'>
                  <p>&#8377;{(product.price-(product.price*product.offer/100).toFixed()) * product.quantity}</p>
                  <button className='dec' onClick={()=>handleDecrement(product.id)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={()=>handleIncrement(product.id)}>+</button>
                  <button className='remove-btn1' onClick={()=>removeTask(product.id)}>Remove</button>
                </article>
              </figcaption>
            </aside>
          ))
        }
      </div>
      <h2 className='cart-amount'>Total Amount Rs : &#8377;{total}</h2>
    </main>
  )
}

export default Viewcart;
