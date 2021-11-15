import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container1 = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: -10px 0;
  ${mobile({ display: 'none' })}
  flex-shrink:1;
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(182, 188, 226);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
  flex-shrink: 1;
`

export const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
  flex-shrink: 1;
`

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 1;
`

export const Image = styled.img`
  height: 80%;
  width: 50%;
  padding-top: 10px;
  margin-left: 30px;
  flex: 1;
  flex-shrink: 1;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  width: 50%;
`

export const Title = styled.h1`
  padding-top: 50px;
  /* font-size: 40px; */
`

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 120px;
`
