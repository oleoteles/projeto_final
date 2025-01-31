import { MainButton } from './styles'

type Props = {
  type: 'link'
  title: string
  to: string
  children: string
}

const Button = ({ title, to, children }: Props) => (
  <MainButton title={title} to={to as string}>
    {children}
  </MainButton>
)

export default Button
