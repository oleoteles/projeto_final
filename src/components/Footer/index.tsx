import * as S from './styles'

import logoImage from '../../assets/images/logo.png'
import Face from '../../assets/images/facebook.png'
import Insta from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.Container>
    <S.Logo src={logoImage} alt="efood" />
    <div>
      <S.Links>
        <S.Link title="Clique aqui para acessar nossa página do Facebook">
          <img src={Face} alt="facebook" />
        </S.Link>
        <S.Link title="Clique aqui para acessar nossa página do Instagram">
          <img src={Insta} alt="instagram" />
        </S.Link>
        <S.Link title="Clique aqui para acessar nossa página do Twitter">
          <img src={Twitter} alt="twitter" />
        </S.Link>
      </S.Links>
    </div>
    <S.Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Description>
  </S.Container>
)

export default Footer
