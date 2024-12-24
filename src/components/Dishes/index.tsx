import { Card, Titulo, Descricao, Botao } from './styles'

type Props = {
  image: string
  title: string
  description: string
  button: string
}

const Dish = ({ image, title, description, button }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>{button}</Botao>
  </Card>
)

export default Dish
