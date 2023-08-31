import styled from 'styled-components'

export const ContainerComponent = styled.main`
  padding: 2rem 4.625rem 9.813rem 15.375rem;

  span {
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const CoffeeContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
`

export const CardCoffees = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  border-radius: 0.375rem 2.25rem;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  margin-top: 3.375rem;
`

export const ImgCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const ContainerTypeCoffee = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`

export const Type = styled.p`
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  line-height: 1.3;
  margin-top: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`

export const Name = styled.p`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  line-height: 1.3;
  margin-top: 1.25rem;

  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-label']};
`
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.063rem 1.5rem 1.25rem;
  margin-bottom: 1.25rem;
`

export const Text = styled.p`
  font-size: 0.875rem;
  margin-right: 0.125rem;
  border-top: 5px solid transparent;
`

export const Cash = styled.p`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-right: 1.5rem;

  color: ${(props) => props.theme['base-text']};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
`

export const Number = styled.div`
  width: 1.25rem;
  color: ${(props) => props.theme['base-title']};
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.375rem;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple-normal']};
  }
`
