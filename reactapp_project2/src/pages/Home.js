import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage1 from '../assets/properpizza3.jpg'
import BannerImage from "../assets/properpizza.jpg"
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' 
    style={{backgroundImage: `url(${BannerImage1})`}}>
      <div className='headerContainer'
      style={{backgroundImage: `url(${BannerImage})`}}>
      <h1>Proper Pizza</h1>
      <p>Pizza never tasted this good.</p>
      <Link to="/menu">
      <button>Order Now</button>
      </Link>
      </div>
    </div>
  )
}

export default Home
