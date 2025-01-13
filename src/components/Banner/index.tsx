import { Image, NameRest, Title } from './styles'

type Props = {
  capa: string
  title: string
  tipo: string
}

const Banner = ({ capa, title, tipo }: Props) => (
  <Image src={capa}>
    <div className="container">
      <Title>{tipo}</Title>
      <NameRest>{title}</NameRest>
    </div>
  </Image>
)

export default Banner
