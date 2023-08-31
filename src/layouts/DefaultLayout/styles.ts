import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 90rem;
  height: 100%;

  background: ${(props) => props.theme['bg-ground']};

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
