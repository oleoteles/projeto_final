import Product from "../../models/Product"
import Dish from "../Dishes"
import { Container, List } from "./styles"

export type Props = {
  dishes: Product[]
}

const DishesList = ({ dishes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
            button={dish.button}
        />
        ))}
      </List>
    </div>
  </Container>
)

export default DishesList
