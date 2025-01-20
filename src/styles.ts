import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  rosa_claro: '#FFEBD9',
  rosa_escuro: '#E66767'
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
    background-color: ${cores.rosa_claro}
    color: ${cores.rosa_escuro}
  }

  body {
  background-color: ${cores.rosa_claro}
  color: ${cores.rosa_escuro}
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
