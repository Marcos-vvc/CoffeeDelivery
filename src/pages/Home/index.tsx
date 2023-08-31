import {
  IntroContainer,
  Title,
  Shopping,
  IconContainer,
  Container,
  Icon,
} from './styles'
import logoCoffee from '../../assets/CoffeeDelivery.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeCard } from './components/Coffee Card'

export function Home() {
  return (
    <Container>
      <IntroContainer>
        <Title>
          <span>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </span>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </p>{' '}
          <Shopping>
            <IconContainer>
              <Icon statusColor="yellowDark">
                <ShoppingCart size={16} weight="fill" color="white" />
              </Icon>
              Compras simples e segura
            </IconContainer>

            <IconContainer>
              <Icon statusColor="base">
                <Package name="pack" size={16} weight="fill" color="white" />
              </Icon>
              Embalagem mantém o café intacto
            </IconContainer>

            <IconContainer>
              <Icon statusColor="yellow">
                <Timer size={16} weight="fill" color="white" />
              </Icon>
              Entrega rápida e rastreada
            </IconContainer>

            <IconContainer>
              <Icon statusColor="purple">
                <Coffee size={16} weight="fill" color="white" />
              </Icon>
              O café chega fresquinho até você
            </IconContainer>
          </Shopping>
        </Title>

        <img src={logoCoffee} alt="" />
      </IntroContainer>

      <CoffeeCard />
    </Container>
  )
}
