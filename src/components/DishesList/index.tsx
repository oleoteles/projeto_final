import Dish from '../Dishes'
import * as S from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const DishesList = ({ restaurants }: Props) => (
  <>
    <S.Container>
      <div className="container">
        <S.List>
          {Array.isArray(restaurants) &&
            restaurants.map(
              (restaurant) =>
                Array.isArray(restaurant.cardapio) &&
                restaurant.cardapio.map((dish) => (
                  <Dish key={dish.id} cardapio={dish} />
                ))
            )}
        </S.List>
      </div>
    </S.Container>
  </>
)

export default DishesList
