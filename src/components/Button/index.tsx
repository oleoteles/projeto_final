import { Botao } from './styles'

type Props = {
  type: 'link'
  title: string
  to: string
  children: string
}

const Button = ({ title, to, children }: Props) => (
  <Botao title={title} to={to as string}>
    {children}
  </Botao>
)

export default Button
