import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const [opcoes, setOpcoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setOpcoes(res))
  }, [])

  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantsList restaurants={opcoes} />
      </>
    )
  }

  return (
    <>
      <Header />
      <Loader />
    </>
  )
}

export default Home
