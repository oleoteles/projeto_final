import Dish from '../Dishes'
import { Container, List } from './styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurants: Restaurante[]
}

const DishesList = ({ restaurants }: Props) => (
  <>
    <Container>
      <div className="container">
        <List>
          {Array.isArray(restaurants) &&
            restaurants.map(
              (restaurant) =>
                Array.isArray(restaurant.cardapio) &&
                restaurant.cardapio.map((dish) => (
                  <Dish key={dish.id} cardapio={dish} />
                ))
            )}
        </List>
      </div>
    </Container>
  </>
)

export default DishesList
