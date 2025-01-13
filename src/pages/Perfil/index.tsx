import DishesList from '../../components/DishesList'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'
import Banner from '../../components/Banner'

export type Props = {
  restaurants: Restaurante[]
}

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
      .catch((err) => console.error('Erro ao carregar cardápio:', err))
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={restaurante.capa}
        title={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <DishesList restaurants={[restaurante]} />
    </>
  )
}

export default Perfil

// const pratos: Product[] = {
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 1,
//     image: Marguerita,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   }
