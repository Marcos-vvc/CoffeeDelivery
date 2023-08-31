import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12rem 10rem;
  align-items: flex-start;

  img {
    flex-shrink: 0;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    &:first-child {
      font-family: 'Baloo 2';
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:last-child {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const GradientBorder = styled.div`
  display: flex;
  gap: 6.375rem;
  margin-top: 2.5rem;

  background-clip: padding-box;

  border-image: linear-gradient(to right, #dbac2c, #8047f8) 1;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 32.875rem;

  gap: 2rem;

  border-radius: 0.375rem 2.25rem;
  border: 1px solid;
`

const StyledContainerStatus = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    line-height: 1.3;

    &:first-child {
      font-weight: 700;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }

  p {
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Location = styled(StyledContainerStatus)``
export const Time = styled(StyledContainerStatus)``
export const Cash = styled(StyledContainerStatus)``

const STATUS_COLORS = {
  yellow: 'yellow-normal',
  purple: 'purple-normal',
  yellowDark: 'yellow-dark',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icon = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  border-radius: 62.5rem;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;

  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`
