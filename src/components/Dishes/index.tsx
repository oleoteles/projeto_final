import {
  Card,
  Titulo,
  Descricao,
  Botao,
  Modal,
  BotaoModal,
  ModalContent,
  Image
} from './styles'

import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { CardapioItens, Restaurante } from '../../pages/Home'

type Props = {
  cardapio: CardapioItens
}

const Dish = ({ cardapio }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 168) {
      return descricao.slice(0, 168) + '...'
    }
    return descricao
  }
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }

  return (
    <>
      <section>
        <Card>
          <img src={cardapio.foto} alt={cardapio.nome} />
          <Titulo>{cardapio.nome}</Titulo>
          <Descricao>{getDescricao(cardapio.descricao)}</Descricao>
          <Botao onClick={() => setModalEstaAberto(true)}>Mais detalhes</Botao>
        </Card>
      </section>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img
            onClick={() => setModalEstaAberto(false)}
            className="img-close"
            src={fechar}
            alt="ícone de fechar"
          />
          <Image src={cardapio.foto} alt={`imagem de ${cardapio.nome}`} />
          <div>
            <header>
              <h4>{cardapio.nome}</h4>
              <p>{cardapio.descricao}</p>
            </header>
            <p>{cardapio.porcao}</p>
            <BotaoModal onClick={addToCart}>
              Adicionar ao carrinho -{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(cardapio.preco)}
            </BotaoModal>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Dish
