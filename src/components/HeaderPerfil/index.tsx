import { Carrinho, Div, Logo, Nome, Vector } from './styles'

import vectorImg from '../../assets/images/Vector.png'
import logoImage from '../../assets/images/logo.png'

const HeaderPerfil = () => (
  <>
    <Vector style={{ backgroundImage: `url(${vectorImg})` }}>
      <Div>
        <Nome>Restaurantes</Nome>
        <Logo src={logoImage} alt="logo da marca" />
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Div>
    </Vector>
  </>
)

export default HeaderPerfil
