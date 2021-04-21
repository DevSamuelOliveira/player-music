import styled from 'styled-components'

export const Aside = styled.aside`

  grid-area: aside;
  color: white;
  background-color: rgb(7, 7, 7);
  width: 100%;
  height: 100%;

  nav{
    display: flex;
    flex-direction: column;
  }

  a{
    color: rgb(163, 157, 157);
    text-decoration: none;
  }

  .active{
    background-color: rgb(58, 58, 58);
    border-radius: 0.7vh;
    color: white;
  }

  a:hover{
    color:white;
  }

  ul{
    margin: 1vh;
  }

  li{
    list-style-type: none;
    padding: 1vh 3vh;
    white-space: nowrap;
  }

  .FaHome, .FaSearch, .FaMusic{
    margin-right: 2vh;
    font-size: 1.3em;
  }
`