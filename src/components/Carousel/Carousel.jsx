import React from 'react'

import Slider from 'react-slick'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import { useHistory } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import homeCarouselData from './homeCarouselData'
import { sliderItems } from './data'
import useStyles from './styles'
import './carousel.css'

export default function Carousel() {
  const history = useHistory()
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slickdotsbanner'
  }

  function NextArrow(props) {
    const { onClick } = props
    return (
      <ArrowForwardIosRoundedIcon
        style={{ right: '15px' }}
        onClick={onClick}
        className={classes.Arrow}
      />
    )
  }

  function PrevArrow(props) {
    const { onClick } = props
    return (
      <ArrowBackIosRoundedIcon
        style={{ left: '15px' }}
        onClick={onClick}
        className={classes.Arrow}
      />
    )
  }

  return (
    <div id="carousel" className={classes.carousel}>
      <Slider {...settings}>
        {sliderItems.map(banner => {
          return (
            <div key={banner.maPhim} className={classes.itemSlider}>
              <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
              <div
                className={classes.backgroundLinear}
                onClick={() => history.push(`/phim/${banner.maPhim}`)}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
