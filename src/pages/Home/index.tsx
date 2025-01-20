import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type CardapioItens = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  foto: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItens[]
}

const Home = () => {
  const [opcoes, setOpcoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setOpcoes(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurants={opcoes} />
    </>
  )
}

export default Home
