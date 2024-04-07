import React from 'react'
import {mainCaroselData} from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
    const items = mainCaroselData.map((item)=> <img className='cursor-pointer' src={item.image} role='presentation'/>)
  return (
    <AliceCarousel
    items={items}/>
  )
}

export default MainCarosel