import { Container as _Container } from 'bumbag/Container'
import { styled, css } from 'bumbag/styled'
import { breakpoint, space, palette } from 'bumbag/utils/theme'

export const Wrapper = styled.div`
  display: flex;
  padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
  background: ${(props) => palette(props.palette || 'primaryDark')};
  min-height: 64px;
`

export const Container = styled(_Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${breakpoint(
    'min-desktop',
    css`
      flex-direction: row;
      align-items: center;
    `
  )}

  h1 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    font-family: var(--serif-font);

    a {
      color: white;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`
