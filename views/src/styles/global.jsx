import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  :root{
    --grey-main: rgb(44, 44, 44);
  }

  body, html{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--grey-main);
  }
`