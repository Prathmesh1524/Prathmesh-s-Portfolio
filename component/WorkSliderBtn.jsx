"use client"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"
import {useSwiper} from "swiper/react"

const WorkSliderBtn = ({containerStyle,btnStyle,iconStyle}) => {
    const swiper= useSwiper();
  return (
    <div className={containerStyle} >
        <button className={btnStyle}>
            <PiCaretLeftBold  className={iconStyle} onClick={()=> swiper.slidePrev()}/>
        </button>
        <button className={btnStyle}>
            <PiCaretRightBold className={iconStyle}  onClick={()=> swiper.slideNext()}/>
        </button>
    
      
    </div>
  )
}

export default WorkSliderBtn
