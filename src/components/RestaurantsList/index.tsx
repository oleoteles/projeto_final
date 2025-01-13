import { Restaurante } from '../../pages/Home'
import Restaurants from '../Restaurants'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Restaurants
              id={restaurant.id}
              destacado={restaurant.destacado}
              category={[restaurant.tipo]}
              description={restaurant.descricao}
              image={restaurant.capa}
              title={restaurant.titulo}
              note={restaurant.avaliacao}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
