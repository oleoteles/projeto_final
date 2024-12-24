class Product {
  description: string
  image: string
  title: string
  button: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    button: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.button = button
  }
}

export default Product

