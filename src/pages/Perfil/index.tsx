import { useParams } from 'react-router-dom'
import DishesList from '../../components/DishesList'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'
import Banner from '../../components/Banner'
import { useGetDishQuery } from '../../services/api'
import Cart from '../../components/Cart'

// export type Props = {
//   restaurants: Restaurante[]
// }

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetDishQuery(id!)

  // const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setRestaurante(res))
  //     .catch((err) => console.error('Erro ao carregar cardápio:', err))
  // }, [id])

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
      <Cart />
    </>
  )
}

export default Perfil
