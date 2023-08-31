import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffe from '../../assets/Logo.svg'
import { CartCount, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { cartItems } = useContext(CoffeeContext)

  const totalQuantity = cartItems.reduce((acc, item) => item.quantity + acc, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffe} alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Brasília, DF
        </span>

        <NavLink to="/checkout" title="Shopping Car" end>
          <ShoppingCart size={22} weight="fill" />

          {cartItems.length > 0 && <CartCount>{totalQuantity}</CartCount>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
