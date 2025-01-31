import * as S from './styles'

type Props = {
  capa: string
  title: string
  tipo: string
}

const Banner = ({ capa, title, tipo }: Props) => (
  <S.Image src={capa}>
    <div className="container">
      <S.Title>{tipo}</S.Title>
      <S.NameRest>{title}</S.NameRest>
    </div>
  </S.Image>
)

export default Banner
