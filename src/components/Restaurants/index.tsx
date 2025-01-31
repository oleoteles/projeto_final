import Tag from '../Tag'

import * as S from './styles'
import MainButton from '../Button'
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
  const getDescription = (text: string) => {
    if (text.length > 231) {
      return text.slice(0, 231) + '...'
    }
    return text
  }

  return (
    <S.Card>
      <S.Cover src={image} alt={title} />
      <S.Category>
        {category.map((category) => (
          <Tag key={category} size={'small'}>
            {category}
          </Tag>
        ))}
      </S.Category>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.NoteContainer>
          <S.Note>{note}</S.Note>
          <S.Star src={star} alt="estrela" />
        </S.NoteContainer>
        <S.Description>{getDescription(description)}</S.Description>
        <MainButton
          type="link"
          to={`/restaurantes/${id}`}
          title="Clique aqui para saber mais"
        >
          Saber mais
        </MainButton>
      </S.Box>
    </S.Card>
  )
}

export default Restaurants
