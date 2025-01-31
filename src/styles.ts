import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  light_pink: '#FFEBD9',
  dark_pink: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    overflow-x: hidden;
    background-color: ${colors.light_pink}
    color: ${colors.dark_pink}
  }

  body {
  background-color: ${colors.light_pink}
  color: ${colors.dark_pink}
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  }
`
