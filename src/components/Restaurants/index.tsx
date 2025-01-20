import Tag from '../Tag'

import {
  Box,
  Card,
  Descricao,
  Titulo,
  Category,
  Nota,
  Capa,
  Estrela,
  NotaContainer
} from './styles'
import Botao from '../Button'
import star from '../../assets/images/estrela.png'

type Props = {
  title: string
  destacado: boolean
  category: string[]
  description: string
  image: string
  note: number
  id: number
}

const Restaurants = ({
  title,
  category,
  description,
  image,
  note,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 231) {
      return descricao.slice(0, 231) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Capa src={image} alt={title} />
      <Category>
        {category.map((category) => (
          <Tag key={category} size={'small'}>
            {category}
          </Tag>
        ))}
      </Category>
      <Box>
        <Titulo>{title}</Titulo>
        <NotaContainer>
          <Nota>{note}</Nota>
          <Estrela src={star} alt="estrela" />
        </NotaContainer>
        <Descricao>{getDescricao(description)}</Descricao>
        <Botao
          type="link"
          to={`/restaurantes/${id}`}
          title="Clique aqui para saber mais"
        >
          Saber mais
        </Botao>
      </Box>
    </Card>
  )
}

export default Restaurants
