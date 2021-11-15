import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './HeaderRegister.style'
import PropTypes from 'prop-types'
export default function HeaderRegister({ title }) {
  return (
    <S.Header>
      <S.Container className="container">
        <S.HeaderBrand>
          <S.HeaderImage>
            <Link to="/">
              <img src="/logo.png" alt=""></img>
            </Link>
          </S.HeaderImage>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="link">
          Cần trợ giúp
        </Link>
      </S.Container>
    </S.Header>
  )
}
HeaderRegister.proTypes = {
  title: PropTypes.string
}
