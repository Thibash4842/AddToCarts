import React, { useContext } from 'react';
import '../cssfiles/Header.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../App';
import ProgressBar from "react-scroll-progress-bar";


const Header = () => {
  const { cart } = useContext(cartContext);

  return (
    <>
      <header className='nav-container'>
        <div>
          <h2 className='logo'>Fruits Shop</h2>
        </div>
        <ul>
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/Viewcart"} ><span className='cart-count' >{cart.length}</span>View Cart</Link>
          </li>
        </ul>
      </header>
      <ProgressBar height="8" bgcolor="yellowgreen" duration="1" />

    </>
  )
}

export default Header
