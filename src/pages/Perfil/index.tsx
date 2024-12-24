import DishesList from '../../components/DishesList'
import HeaderPerfil from '../../components/HeaderPerfil'
import Product from '../../models/Product'

import Marguerita from '../../assets/images/marguerita.png'

const pratos: Product[] = [
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 1,
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <DishesList dishes={pratos} />
  </>
)

export default Perfil
