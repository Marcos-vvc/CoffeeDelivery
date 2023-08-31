import {
  Cash,
  ContainerSuccess,
  GradientBorder,
  Icon,
  Location,
  OrderInfo,
  Text,
  Time,
} from './styles'
import Cycle from '..//../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <ContainerSuccess>
      <Text>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Text>

      <GradientBorder>
        <OrderInfo>
          <Location>
            <Icon statusColor="purple">
              <MapPin size={16} weight="fill" color="white" />
            </Icon>
            <span>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />{' '}
              Farrapos - Porto Alegre, RS
            </span>

            <span></span>
          </Location>

          <Time>
            <Icon statusColor="yellow">
              <Timer size={16} weight="fill" color="white" />
            </Icon>
            <span>
              Previsão de entrega <br />
              <p>20 min - 30 min</p>
            </span>
          </Time>

          <Cash>
            <Icon statusColor="yellowDark">
              <CurrencyDollar size={16} color="white" />
            </Icon>
            <span>
              Pagamento na entrega
              <br />
              <p>Cartão de Crédito</p>
            </span>
          </Cash>
        </OrderInfo>
        <img src={Cycle} alt="" />
      </GradientBorder>
    </ContainerSuccess>
  )
}
