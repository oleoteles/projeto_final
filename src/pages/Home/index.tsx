import RestaurantsList from '../../components/RestaurantsList'
import Shop from '../../models/Shop'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Header from '../../components/Header'

const opcoes: Shop[] = [
  {
    id: 1,
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    title: 'Hioki Sushi',
    note: '4,9',
    button: 'Saiba mais'
  },
  {
    id: 2,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    title: 'La Dolce Vita Trattoria',
    note: '4,6',
    button: 'Saiba mais'
  },
  {
    id: 3,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    title: 'La Dolce Vita Trattoria',
    note: '4,6',
    button: 'Saiba mais'
  },
  {
    id: 4,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    title: 'La Dolce Vita Trattoria',
    note: '4,6',
    button: 'Saiba mais'
  },
  {
    id: 5,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    title: 'La Dolce Vita Trattoria',
    note: '4,6',
    button: 'Saiba mais'
  },
  {
    id: 6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    title: 'La Dolce Vita Trattoria',
    note: '4,6',
    button: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurants={opcoes} />
  </>
)

export default Home
