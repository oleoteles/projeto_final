import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <ClockLoader color={colors.dark_pink} />
  </Container>
)

export default Loader
