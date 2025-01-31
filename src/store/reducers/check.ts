import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number
  price: number
}

type clientInfos = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}

type CheckState = {
  isOpen: boolean
  client: clientInfos
}

const initialState: CheckState = {
  isOpen: false,
  client: {
    products: [],
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  }
}

const checkSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    addClientInfos: (state, action: PayloadAction<clientInfos>) => {
      state.client = action.payload
    }
  }
})

export const { open, close, addClientInfos } = checkSlice.actions
export default checkSlice.reducer
