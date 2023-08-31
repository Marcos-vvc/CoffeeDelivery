import React, { useState } from 'react'

export interface Product {
  id: number
  quantity: number
}

export interface IAppContext {
  cartItems: Product[]
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
}

type Props = {
  children?: React.ReactNode
}

export const CoffeeContext = React.createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  return (
    <CoffeeContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CoffeeContext.Provider>
  )
}
