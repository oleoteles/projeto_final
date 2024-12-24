import Tag from '../Tag'

import { Box, Card, Descricao, Titulo, Category, Nota } from './styles'
import Botao from '../Button'

type Props = {
  title: string;
  category: string[];
  description: string;
  image: string;
  note: string;
  button: string;
  to: string
}

const Restaurants = ({ title, category, description, image, note, button}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Category>
      {category.map((category) => (<Tag key={category} size={'small'}>{category}</Tag>))}
    </Category>
    <Box>
    <Titulo>{title}</Titulo>
    <Nota>{note}</Nota>
    <Descricao>
      {description}
    </Descricao>
    <Botao type="link" to="/restaurant" title='Clique aqui para saber mais'>{button}</Botao>
    </Box>
  </Card>
)

export default Restaurants
