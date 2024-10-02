import React, { useEffect, useState } from 'react';
// data items import files
import data from '../asserts/products.json';
import images from '../asserts/Image';
import service from '../asserts/service';
// import component
import Product from './Product';
import Reviews from './Reviews';
import VideoPlaylist from './VideoPlaylist';
// import css files
import '../cssfiles/Home.css';
// scroll animation
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
// react icons import
// import { GiFruitBowl } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
// video and image import
import fruit1 from '../asserts/backimg/back img122.jpg';
import fruit2 from '../asserts/backimg/banner4.jpg'
import fruit3 from '../asserts/backimg/platrfruits111.jpg';
import fruit4 from '../asserts/backimg/boul-image.jpg';
// import scoll motion
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Home = () => {
  const [products] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);
  const [search, setSearch] = useState("");

  // slideshow prev function
  function prevSlide() {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1)
  }
  // slideshow next function
  function nextSlide() {
    setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1)
  }
  // slideShow function in useEffect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval)
  })

  // sccroll motion
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
    {/* <ScrollContainer> */}
      {/* slideshow */}
      <div className='slide-conatainer'>
        <div className="show-container">
          {images.map((img, index) => (
            <div key={index} className={index === slideIndex ? "slides fade" : "slidesnone"}>
              <img src={img.src} alt={img.caption} className='slide-img' />
              <div className='text'>
                {/* <h1>{img.content}</h1>
                <h4>{img.caption}</h4> */}
              </div>
            </div>))}
          <span className='prev' onClick={prevSlide}>&#10094;</span>
          <span className='next' onClick={nextSlide}>&#10095;</span>
        </div>
        <div className='dots-container'>
          {images.map((dot, index) => (
            <span key={index} className={index === slideIndex ? "dot activee" : "dot"}></span>
          ))}
        </div>
      </div>

      {/* auto slider continuer */}
      <div className="auto-slider-contiuner">
        {products.map((slider, index) => (
          <ul className='auto-slider'><li key={index}>{slider.name}</li></ul>
        ))}
      </div>

      {/* welcome to mservices */}
      <div className='services-container'>
        <article className='shop-heading'>
          <p> Services <FaLeaf /></p>
          <h1>Welcome To Organic</h1>
          {/* <GiFruitBowl className='logo-icon' /> */}
        </article>
        <article className='typeof-service'>
          {
            service.map((ser) => (
              // <ScrollAnimation animateIn='bounceInRight' >
              <section key={ser.id} className='ser-contain'>
                <div className='ser-img'>
                  <img src={ser.img} alt={ser.heading} />
                </div>
                <div className='ser-content'>
                  <h3>{ser.heading}</h3>
                  <p>{ser.discription}</p>
                </div>
              </section>
              // </ScrollAnimation>
            ))
          }
        </article>
        <article className='fruits-back-img'>
          <img src={fruit1} alt="fruit.jpg" />
        </article>
      </div>

      <article className='shop-heading'>
        <p> Fruit Shop <FaLeaf /></p>
        <h1>Treanding Products</h1>
        {/* <GiFruitBowl className='logo-icon' /> */}
      </article>
      {/* search */}
      <form className='search-box'>
        <input type='type' className='search' placeholder='Search Fruit' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={(e) => setSearch(e.target.value)}>Search</button>
      </form>

      {/*cart product  */}
      <div className='product-container'>
        {products.filter((item) => {
          return search.toLowerCase() === "" ? item :
            item.name.toLowerCase().includes(search)
        }).map((product) => (
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
            <Product key={product.id} product={product} />
          </ScrollAnimation>
        ))}
      </div>

      <article className='fruits-back-img'>
        <img src={fruit2} alt="fruit.jpg" />
      </article>

      <article className='shop-heading'>
        <p> Delite <FaLeaf /></p>
        <h1>Purity Of Honey</h1>
        {/* <GiFruitBowl className='logo-icon' /> */}
      </article>

      <div className="tasty-food">
        <section className='tasty-content'>
          <h3>Sweet Honey<FaLeaf /></h3>
          <h4>Delite Taste Fresh Fruits</h4>
          <p> Its healing properties are also used for medicinal purposes such as. Health potions. Being a semi-aquatic plant, it can be seen on the shores of rivers, lakes, and other bodies of fresh water.</p>
          <button>Shop Now</button>
          <h3 style={{ margin: "10px 0px" }}>W e b Z e e l</h3>
        </section>
        <section className='tasty-img'>
          <img src={fruit3} alt="fruit3" />
        </section>
      </div>

      {/* video player for fruits ad */}
      <div className='video-container'>
        <figure className='fruit-txt'>
          <h1>HEALTHY FOOD</h1>
        </figure>
        <figure className='vid-contain'>
          <aside className='vid-img'>
            <img src={fruit4} alt="fruit4.jpg" />
            <h1 style={{textAlign:'center'}}>Fresh Fruits</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus debitis odit cumque praesentium nobis officiis mollitia, facilis laborum dicta architecto iusto! Dignissimos officia placeat animi voluptatem dolorem in repudiandae adipisci.</p>
          </aside>
          <aside className='vid'>
            <VideoPlaylist />
          </aside>
        </figure>
      </div>

      
      <article className='shop-heading'>
        <h1>Reviews <FaLeaf /></h1>
        {/* <GiFruitBowl className='logo-icon' /> */}
      </article>
      <Reviews />

      {/* <div className='up-arrow'>
        <a href="#" className='arrow'>&uarr;</a>
      </div> */}
      {/* </ScrollContainer> */}
    </>
  )
}

export default Home;
