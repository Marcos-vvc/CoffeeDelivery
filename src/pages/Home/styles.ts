import styled from 'styled-components'

export const Container = styled.div``

export const IntroContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34rem;
  background: ${(props) => props.theme['bg-ground']};

  img {
    margin-left: 3.5rem;
  }
  margin-top: 5.875rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10rem;
  line-height: 1.3;
  margin-top: 5.875rem;

  span {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Shopping = styled.div`
  display: grid;
  grid-template-columns: minmax(14.438rem, 1fr) minmax(18.375rem, 1fr);
  grid-row-gap: 1.594rem;
  margin-top: 4.125rem;
  margin-bottom: 6.75rem;

  font-family: 'Roboto';
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const STATUS_COLORS = {
  yellow: 'yellow-normal',
  purple: 'purple-normal',
  yellowDark: 'yellow-dark',
  base: 'base-text',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icon = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 62.5rem;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`
