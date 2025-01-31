import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type clientCard = {
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PayState = {
  items: CardapioItens[]
  isOpen: boolean
  clientCard: clientCard
}

const initialState: PayState = {
  items: [],
  isOpen: false,
  clientCard: {
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  }
}

const paySlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    addCardInfos: (state, action: PayloadAction<clientCard>) => {
      state.clientCard = action.payload
    }
  }
})

export const { open, close, addCardInfos } = paySlice.actions
export default paySlice.reducer
