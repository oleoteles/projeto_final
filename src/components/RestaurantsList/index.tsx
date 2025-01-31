import Restaurants from '../Restaurants'

import * as S from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
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
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantsList
