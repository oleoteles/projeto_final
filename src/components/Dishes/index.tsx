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

type Props = {
  image: string
  title: string
  description: string
  preco: number
  porcao: string
}

const Dish = ({ image, title, description, preco, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 168) {
      return descricao.slice(0, 168) + '...'
    }
    return descricao
  }

  return (
    <>
      <section>
        <Card>
          <img src={image} alt={title} />
          <Titulo>{title}</Titulo>
          <Descricao>{getDescricao(description)}</Descricao>
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
          <Image src={image} alt={`imagem de ${title}`} />
          <div>
            <header>
              <h4>{title}</h4>
              <p>{description}</p>
            </header>
            <p>{porcao}</p>
            <BotaoModal>
              Adicionar ao carrinho -{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(preco)}
            </BotaoModal>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Dish
