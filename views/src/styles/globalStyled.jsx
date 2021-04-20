import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  :root{
    --color-main: rgb(34, 34, 34);
  }

  *{
    margin: 0;
    padding: 0;
  }

  body, html, #root{
    width: 100%;
    height: 100%;
    background-color: var(--color-main);
  }

  .MainContainer{
    display: grid;
    grid-template-columns: 0.6fr 3fr;
    width: 100%;
    height: 100%;
  }
`