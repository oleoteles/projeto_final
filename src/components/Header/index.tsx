import logoImage from '../../assets/images/logo.png'
import { Logo, Nome, Vector } from './styles'
import vectorImg from '../../assets/images/vector_home.png'

const Header = () => (
  <Vector style={{ backgroundImage: `url(${vectorImg})` }}>
    <Logo src={logoImage} alt="logo da marca" />
    <Nome>Viva experiências gastronômicas no conforto da sua casa</Nome>
  </Vector>
)

export default Header
