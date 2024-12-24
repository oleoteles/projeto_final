class Shop {
  category: string[]
  description: string
  image: string
  title: string
  note: string
  button: string
  id: number

  constructor(
    id: number,
    category: string[],
    description: string,
    image: string,
    title: string,
    note: string,
    button: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.note = note
    this.button = button
  }
}

export default Shop
