import { Send } from '@material-ui/icons'
import * as S from './Newsletter.style'

const Newsletter = () => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Desc>Get timely updates from your favorite products.</S.Desc>
      <S.InputContainer>
        <S.Input placeholder="Your email" />
        <S.Button>
          <Send />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  )
}

export default Newsletter
