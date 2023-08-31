import { useState, useContext } from 'react'
import {
  Actions,
  Button,
  Buy,
  CardCoffees,
  Cash,
  CoffeeContainer,
  ContainerComponent,
  ContainerTypeCoffee,
  Counter,
  Description,
  ImgCoffeeCard,
  Name,
  Number,
  Text,
  Type,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import Expresso from '../../../../assets/coffees/Expresso.svg'
import Americano from '../../../../assets/coffees/Americano.svg'
import ExpressoCremoso from '../../../../assets/coffees/Expresso Cremoso.svg'
import CafeGelado from '../../../../assets/coffees/Café Gelado.svg'
import CafeComLeite from '../../../../assets/coffees/Café com Leite.svg'
import Latte from '../../../../assets/coffees/Latte.svg'
import Capuccino from '../../../../assets/coffees/Capuccino.svg'
import Macchiato from '../../../../assets/coffees/Macchiato.svg'
import Mochaccino from '../../../../assets/coffees/Mochaccino.svg'
import ChocolateQuente from '../../../../assets/coffees/Chocolate Quente.svg'
import Cubano from '../../../../assets/coffees/Cubano.svg'
import Havaiano from '../../../../assets/coffees/Havaiano.svg'
import Irlandes from '../../../../assets/coffees/Irlandês.svg'
import { CoffeeContext, Product } from '../../../../context/CoffeeContext'

export function CoffeeCard() {
  const initialValue = 9.9
  const [count, setCount] = useState(0)
  const [coffee, setCoffee] = useState(0)

  const { cartItems, setCartItems } = useContext(CoffeeContext)

  function handleAdd() {
    setCount((prevCount) => prevCount + initialValue)
    setCoffee((prevCoffee) => prevCoffee + 1)
  }

  function handleSubtract() {
    if (count >= initialValue) {
      setCount((prevCount) => prevCount - initialValue)
      setCoffee((prevCoffee) => prevCoffee - 1)
    }
  }

  const addItemToCart = (product: Product) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== product.id
      }),
    )
    setCartItems((prevCartItems) => [...prevCartItems, product])
  }

  return (
    <ContainerComponent>
      <span>Nossos cafés</span>

      <CoffeeContainer>
        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Expresso} alt="Café Expresso" />
            <Type>Tradicional</Type>
            <Name>Expresso Tradicional</Name>
            <Description>
              O tradicional café feito com água quente e grãos moídos
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash>{count.toFixed(2)}</Cash>
              <Actions>
                <Counter>
                  <Minus
                    size={14}
                    weight="bold"
                    color="#8047F8"
                    onClick={handleSubtract}
                    cursor="pointer"
                  />
                  <Number>{coffee}</Number>
                  <Plus
                    size={14}
                    weight="bold"
                    color="#8047F8"
                    onClick={handleAdd}
                    cursor="pointer"
                  />
                </Counter>

                <Button>
                  <ShoppingCartSimple
                    size={22}
                    weight="fill"
                    color="#F3F2F2"
                    onClick={() => addItemToCart({ quantity: coffee, id: 1 })}
                  />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Americano} alt="Café Expresso Americano" />
            <Type>Tradicional</Type>
            <Name>Expresso Americano</Name>
            <Description>
              Expresso diluído, menos intenso que o tradicional
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={ExpressoCremoso} alt="Café Expresso Cremoso" />
            <Type>Tradicional</Type>
            <Name>Expresso Cremoso</Name>
            <Description>
              Café expresso tradicional com espuma cremosa{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={CafeGelado} alt="Café Gelado" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Gelado</Type>
            </ContainerTypeCoffee>

            <Name>Expresso Gelado</Name>
            <Description>
              Bebida preparada com café expresso e cubos de gelo{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={CafeComLeite} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Café com Leite</Name>
            <Description>
              Meio a meio de expresso tradicional com leite vaporizado{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Latte} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Latte</Name>
            <Description>
              Uma dose de café expresso com o dobro de leite e espuma cremosa{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Capuccino} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Capuccino</Name>
            <Description>
              Bebida com canela feita de doses iguais de café, leite e espuma{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Macchiato} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Macchiato</Name>
            <Description>
              Café expresso misturado com um pouco de leite quente e espuma{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Mochaccino} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Mocaccino</Name>
            <Description>
              Café expresso com calda de chocolate, pouco leite e espuma{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={ChocolateQuente} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Tradicional</Type>
              <Type>Com Leite</Type>
            </ContainerTypeCoffee>

            <Name>Chocolate Quente</Name>
            <Description>
              Bebida feita com chocolate dissolvido no leite quente e café{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Cubano} alt="Café especial com álcool gelado" />
            <ContainerTypeCoffee>
              <Type>Especial</Type>
              <Type>alcoólico</Type>
              <Type>Gelado</Type>
            </ContainerTypeCoffee>

            <Name>Cubano</Name>
            <Description>
              Drink gelado de café expresso com rum, creme de leite e hortelã{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Havaiano} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Especial</Type>
            </ContainerTypeCoffee>

            <Name>Havaiano</Name>
            <Description>
              Bebida adocicada preparada com café e leite de coco{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>

        <CardCoffees>
          <ImgCoffeeCard>
            <img src={Irlandes} alt="Café com leite" />
            <ContainerTypeCoffee>
              <Type>Especial</Type>
              <Type>Alcoólico</Type>
            </ContainerTypeCoffee>

            <Name>Irlandês</Name>
            <Description>
              Bebida adocicada preparada com café e leite de coco{' '}
            </Description>
            <Buy>
              <Text>R$</Text>
              <Cash> 9,90</Cash>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Button>
                  <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
                </Button>
              </Actions>
            </Buy>
          </ImgCoffeeCard>
        </CardCoffees>
      </CoffeeContainer>
    </ContainerComponent>
  )
}
