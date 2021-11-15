import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { sliderItems } from '../../data'
import * as S from './Slider.style'

const Slider = () => {
  let [slideIndex, setSlideIndex] = useState(0)
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (slideIndex > 0) {
  //       slideIndex--
  //     } else {
  //       slideIndex++
  //     }
  //   }, 3000) // for automatic slider
  // }, [slideIndex])
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <S.Container1>
      <S.Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <S.Slide
            bg={item.bg}
            key={item.id}
            // style={{ transform: translateX(${slideIndex}vw) }}
            style={{
              transform: `translateX(${props => props.slideIndex * -100}vw)`
            }}
          >
            <S.ImgContainer>
              <S.Image src={item.img} />
            </S.ImgContainer>
            <S.InfoContainer>
              <S.Title>{item.title}</S.Title>
              <S.Desc>{item.desc}</S.Desc>
              <S.Button>SHOW NOW</S.Button>
            </S.InfoContainer>
          </S.Slide>
        ))}
      </S.Wrapper>

      <S.Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </S.Arrow>
    </S.Container1>
  )
}

export default Slider
