import React from 'react'
import BammerImages from '../assets/properpizza4.avif'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage: `url(${BammerImages})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        How it started
        Proper Pizza emerged as a local enterprise, laying its roots in Pristina, Kosovo back in 2002.
        Initially, our journey commenced with a lone establishment dedicated to pizza delivery and takeout services.
        However, our growth was rapid, and within three months, we inaugurated the Proper Pizza restaurant. 
        In 2008, a pivotal moment arrived for Proper Pizza with the inception of our franchise concept. 
        The inaugural franchise store found its home in Kosovo. 2014, 
        Proper Pizza expanded to Albania, marking a significant moment in its journey. 
        This landmark move not only positioned us as pioneers in introducing the franchise model to the culinary sector,
         within Kosovo but also across the Balkans.
         Beyond our homeland, Proper Pizza has extended its reach to 24 international locations, 
         spanning countries such as England, USA, New Zealand, Qatar, Switzerland, Germany, 
         Greece, Albania, North Macedonia, and Montenegro. 
         Proper Pizza proudly possesses an impressive network of 33 stores within Kosovo. 
         Among these, three outlets are under our direct ownership while the others operate as franchises.
        </p>
      </div>
    </div>
  )
}

export default About
