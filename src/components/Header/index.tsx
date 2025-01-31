import logoImage from '../../assets/images/logo.png'
import * as S from './styles'
import vectorImg from '../../assets/images/vector_home.png'

const Header = () => (
  <S.Vector style={{ backgroundImage: `url(${vectorImg})` }}>
    <S.Logo src={logoImage} alt="logo da marca" />
    <S.Name>Viva experiências gastronômicas no conforto da sua casa</S.Name>
  </S.Vector>
)

export default Header
