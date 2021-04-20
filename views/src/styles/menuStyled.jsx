import styled from 'styled-components'

export const Aside = styled.aside`
  color: white;
  background-color: rgb(12, 12, 12);
  width: 100%;
  height: 100%;

  nav{
    display: flex;
    flex-direction: column;
    margin: 3vh;
  }

  a{
    color: rgb(218, 206, 206);
    text-decoration: none;
  }

  a:hover{
    color:white;
  }

  li{
    list-style-type: none;
    padding: 0.7vh 0;
    white-space: nowrap;
  }

  .FaHome, .FaSearch, .FaMusic{
    margin-right: 2vh;
  }
`