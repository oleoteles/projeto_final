import { Carrinho, Div, Logo, Nome, Vector } from "./styles"

import vectorImg from '../../assets/images/Vector.png'
import logoImage from '../../assets/images/logo.png'
import Presentation from '../../assets/images/apresentacao.png'


const HeaderPerfil = () => (
  <>
  <Vector style={{ backgroundImage: `url(${vectorImg})` }}>
    <Div>
      <Nome>Restaurantes</Nome>
      <Logo src={logoImage} />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </Div>
  </Vector>
  <img src={Presentation} />
  </>
)

export default HeaderPerfil
