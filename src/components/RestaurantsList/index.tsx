import Shop from "../../models/Shop";
import Restaurants from "../Restaurants";

import { Container, List } from './styles'

export type Props = {
  restaurants: Shop[]
}

const RestaurantsList = ( { restaurants }: Props) => (
  <Container>
    <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          category={restaurant.category}
          description={restaurant.description}
          image={restaurant.image}
          title={restaurant.title}
          note={restaurant.note}
          button={restaurant.button} to={""}      />
      ))}
    </List>
    </div>
  </Container>
)

export default RestaurantsList

