import * as S from './styles'

import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  cardapio: CardapioItens
}

const Dish = ({ cardapio }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const getDescription = (text: string) => {
    if (text.length > 168) {
      return text.slice(0, 168) + '...'
    }
    return text
  }
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }

  return (
    <>
      <section>
        <S.Card>
          <img src={cardapio.foto} alt={cardapio.nome} />
          <S.Title>{cardapio.nome}</S.Title>
          <S.Description>{getDescription(cardapio.descricao)}</S.Description>
          <S.SButton onClick={() => setModalEstaAberto(true)}>
            Mais detalhes
          </S.SButton>
        </S.Card>
      </section>
      <S.Modal
        onClick={() => setModalEstaAberto(false)}
        className={modalEstaAberto ? 'visivel' : ''}
      >
        <S.ModalContent className="container">
          <img
            onClick={() => setModalEstaAberto(false)}
            className="img-close"
            src={fechar}
            alt="ícone de fechar"
          />
          <S.Image src={cardapio.foto} alt={`imagem de ${cardapio.nome}`} />
          <div>
            <header>
              <h4>{cardapio.nome}</h4>
              <p>{cardapio.descricao}</p>
            </header>
            <p>{cardapio.porcao}</p>
            <S.ModalButton onClick={addToCart}>
              Adicionar ao carrinho -{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(cardapio.preco)}
            </S.ModalButton>
          </div>
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Dish
