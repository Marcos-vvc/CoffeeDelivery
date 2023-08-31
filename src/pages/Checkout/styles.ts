import styled from 'styled-components'

export const ContainerCheckout = styled.main`
  padding: 9rem 10rem;
`

export const Title1 = styled.span`
  display: flex;
  gap: 31.375rem;

  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerCheckoutCards = styled.main`
  display: flex;
  margin-top: 0.938rem;
  gap: 2rem;
`
export const FramesContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  width: 40rem;
  height: 23.25rem;
  background: ${(props) => props.theme['base-card']};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 2.5rem 2.5rem;
`

const BaseInput = styled.input`
  border-radius: 0.25rem;
  border: none;
  padding: 0.75rem;
  gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`
export const RuaInput = styled(BaseInput)`
  width: 35rem;
`
export const NumeroInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComInput = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 21.75rem;
`
export const BairroInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CidadeInput = styled(BaseInput)`
  width: 17.25rem;
  margin-left: 0.75rem;
`
export const UfInput = styled(BaseInput)`
  width: 3.75rem;
  margin-left: 0.75rem;
`

export const ContainerAddress = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 2rem;
  gap: 0.5rem;
`

const StyleAddress = styled.span`
  display: flex;
  flex-direction: column;

  span {
    &:first-child {
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    &:last-child {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Address = styled(StyleAddress)``

export const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 0.375rem;
  width: 40rem;
  height: 12.938rem;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const ContainerPay = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TitlePay = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  span {
    &:first-child {
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    &:last-child {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Section = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const Selected1 = styled.button`
  display: flex;
  align-items: center;
  width: 11.125rem;
  cursor: pointer;
  border: none;

  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:active {
    background: ${(props) => props.theme['purple-light']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['purple-normal']};
  }
`

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.375rem 2.75rem;
  width: 28rem;
  height: 31.125rem;
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;

  gap: 1.5rem;
`

export const CoffeeCardInside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  height: 2rem;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};

  span {
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`

export const Counter = styled(StyledButtons)``
export const Remove = styled(StyledButtons)``

export const Type = styled.p`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Number = styled.p``

export const Price = styled.p`
  display: flex;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`
export const ContainerFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
  margin-top: 1.5rem;

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin-top: 1.5rem;
    padding: 0.75rem 0.5rem;
    text-transform: uppercase;
    border-radius: 0.375rem;
    border: none;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-normal']};

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

const Frames123 = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const TotalItems = styled(Frames123)``

export const Delivery = styled(Frames123)``

export const Total = styled(Frames123)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
