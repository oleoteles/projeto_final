import HeroImage from '../../assets/images/Hero.png'
import './styles.css'

const Header = () => (
  <header>
    <img className='image-header' src={HeroImage} alt="Hero Image" />
  </header>
)

export default Header
