import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import {
  Actions,
  Address,
  BairroInput,
  CepInput,
  CidadeInput,
  CoffeCard,
  CoffeeCardInside,
  ComInput,
  ContainerAddress,
  ContainerCheckout,
  ContainerCheckoutCards,
  ContainerFrame,
  ContainerPay,
  Counter,
  Delivery,
  Details,
  FormContainer,
  Frame1,
  Frame2,
  FramesContainer,
  Number,
  NumeroInput,
  Price,
  Remove,
  RuaInput,
  Section,
  Selected1,
  Title1,
  TitlePay,
  Total,
  TotalItems,
  Type,
  UfInput,
} from './styles'

import Expresso from './/..//../assets/coffees/Expresso.svg'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <ContainerCheckout>
      <Title1>
        <span>Complete seu pedido</span>
        <span> Cafés selecionados</span>
      </Title1>

      <ContainerCheckoutCards>
        <FramesContainer>
          <Frame1>
            <ContainerAddress>
              <MapPinLine size={22} color="#C47F17" />
              <Address>
                <span> Endereço de Entrega</span>
                <span> Informe o endereço onde deseja receber seu pedido</span>
              </Address>
            </ContainerAddress>

            <FormContainer>
              <label htmlFor="cep">
                <CepInput id="cep" placeholder="CEP" />
              </label>

              <label htmlFor="rua">
                <RuaInput id="rua" placeholder="Rua" />
              </label>

              <label htmlFor="numero">
                <NumeroInput id="numero" placeholder="Número" />
                <label htmlFor="complemento">
                  <ComInput id="complemento" placeholder="Complemento " />
                </label>
              </label>

              <label htmlFor="bairro">
                <BairroInput id="bairro" placeholder="Bairro" />
                <label htmlFor="cidade"></label>
                <CidadeInput id="cidade" placeholder="Cidade" />
                <label htmlFor="uf"></label>
                <UfInput id="uf" placeholder="UF" />
              </label>
            </FormContainer>
          </Frame1>

          <Frame2>
            <ContainerPay>
              <CurrencyDollar size={22} color="#8047F8" />
              <TitlePay>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </TitlePay>
            </ContainerPay>

            <Section>
              <Selected1>
                <CreditCard size={16} color="#8047F8" />
                <span>Cartão de Crédito</span>
              </Selected1>

              <Selected1>
                <Bank size={16} color="#8047F8" />
                <span>Cartão de Débito</span>
              </Selected1>

              <Selected1>
                <Money size={16} color="#8047F8" />
                <span>Dinheiro</span>
              </Selected1>
            </Section>
          </Frame2>
        </FramesContainer>

        <CoffeCard>
          <CoffeeCardInside>
            <img src={Expresso} alt="Café Expresso" width={64} />
            <Details>
              <Type> Expresso Tradicional</Type>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Remove>
                  <Trash size={16} color="#8047F8" />
                  <span>Remover</span>
                </Remove>
              </Actions>
            </Details>
            <Price> R$ 9,90</Price>
          </CoffeeCardInside>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="368"
            height="2"
            viewBox="0 0 368 2"
            fill="none"
          >
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>

          <CoffeeCardInside>
            <img src={Expresso} alt="Café Expresso" width={64} />
            <Details>
              <Type> Latte</Type>
              <Actions>
                <Counter>
                  <Minus size={14} weight="bold" color="#8047F8" />
                  <Number>1</Number>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </Counter>

                <Remove>
                  <Trash size={16} color="#8047F8" />
                  <span>Remover</span>
                </Remove>
              </Actions>
            </Details>

            <Price> R$ 9,90</Price>
          </CoffeeCardInside>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="368"
            height="2"
            viewBox="0 0 368 2"
            fill="none"
          >
            <path d="M0 1H368" stroke="#E6E5E5" />
          </svg>

          <ContainerFrame>
            <TotalItems>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </TotalItems>

            <Delivery>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Delivery>

            <Total>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Total>

            <NavLink to="/success">Confirmar pedido</NavLink>
          </ContainerFrame>
        </CoffeCard>
      </ContainerCheckoutCards>
    </ContainerCheckout>
  )
}
