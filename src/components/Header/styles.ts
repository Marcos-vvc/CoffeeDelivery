import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
  padding: 2rem 10rem;

  position: fixed;
  top: 0;
  z-index: 10;
  background: ${(props) => props.theme['bg-ground']};

  img {
    background: ${(props) => props.theme['bg-ground']};
  }

  nav {
    display: flex;
    gap: 0.5rem;
    line-height: 1.3;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};

    border-radius: 0.375rem;

    width: 8.938rem;
    height: 2.375rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 0.375rem;
  }
`
export const CartCount = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -0.5rem;
  right: -0.522rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-dark']};
`
