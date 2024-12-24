import { Container, Descricao, Link, Links, Logo } from './styles'

import logoImage from '../../assets/images/logo.png'
import Face from '../../assets/images/facebook.png'
import Insta from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <Logo src={logoImage} alt="efood" />
    <div>
      <Links>
        <Link href="">
          <img src={Face} alt="facebook" />
        </Link>
        <Link href="">
          <img src={Insta} alt="instagram" />
        </Link>
        <Link href="">
          <img src={Twitter} alt="twitter" />
        </Link>
      </Links>
    </div>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Descricao>
  </Container>
)

export default Footer
