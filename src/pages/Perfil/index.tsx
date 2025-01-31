import { useParams } from 'react-router-dom'
import DishesList from '../../components/DishesList'
import HeaderPerfil from '../../components/HeaderPerfil'

import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Payment from '../../components/Payment'
import Loader from '../../components/Loader'

import { useGetRestaurantByIdQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurante } = useGetRestaurantByIdQuery(id)

  if (!restaurante) {
    return (
      <>
        <HeaderPerfil />
        <Loader />
      </>
    )
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
      <Checkout />
      <Payment />
    </>
  )
}

export default Perfil
