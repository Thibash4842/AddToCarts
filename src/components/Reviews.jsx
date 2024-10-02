import React from 'react'
import '../cssfiles/Reviews.css';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageone from '../asserts/ReviewImg/manone.jpeg';
import imagetwo from '../asserts/ReviewImg/WomenTwo.jpeg';
import imagethree from '../asserts/ReviewImg/MenThree.jpeg';
import imagefour from '../asserts/ReviewImg/Womenfour.jpeg';
import imagefive from '../asserts/ReviewImg/menfive.jpeg';
import imagesix from '../asserts/ReviewImg/womensix.jpeg';

function SampleNextArrow(props){
  const {className,style,onClick} = props;
  return (
    <div className={className} style={{...style,display:"block",background:"dodgerblue"}} onClick={onClick}></div>
  )
};
function SamplePrevArrow(props){
  const {className,style,onClick} = props;
  return (
    <div className={className} style={{...style,display:"block",background:"dodgerblue"}} onClick={onClick}></div>
  )
};
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:5000,
    cssEase:"linear",
    focusOnSelect:true,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <div className='review-contain'>
    <div className='review-cart'>
    <Slider {...settings}>
      {data.map((data)=>(
        <div className='review-carts'>
          <div className='rev-cart-img'>
            <img src={data.img} alt={data.name} />
          </div>
          <div className='rev-cart-content'>
            <h4>{data.name}</h4>
            <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <p>{data.review}</p>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  </div>
  )
}
const data = [
  {
    name:"John Mac",
    img:imageone,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  },
  {
    name:"Zhoya",
    img:imagetwo,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  },
  {
    name:"Dhiliro",
    img:imagethree,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  },
  {
    name:"Agilia",
    img:imagefour,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  },
  {
    name:"Mackar",
    img:imagefive,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  },
  {
    name:"Muzaf Tin",
    img:imagesix,
    review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate aliquam vitae." 
  }
]
export default Reviews;

