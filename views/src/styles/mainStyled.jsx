import styled from 'styled-components'

export default styled.main`
  grid-area: main;
  color: white;
  
  .homeContainer{
    margin: 4vh 8vh;
  }

  .musicsApresentationContainer{
    margin: 6vh 0.5vh;
    display: flex;
    user-select: none;
  }

  .musicsApresentationContainer div{
      width: 70vh;
      height: 14vh;
      background-color: rgba(86, 96, 119, 0.281);
      border-radius: 0.7vh;
      font-weight: bold;
      display: flex;
      margin-right: 10vh;
    }

  .musicsApresentationContainer div:hover{
    background-color: rgba(65, 63, 97, 0.281)
  }

  .musicsApresentationContainer p{
    margin-left: 5vh;
    line-height: 13.5vh;
  }

  .musicsApresentationContainer a{
    padding: 0 1.6vh;
    border-radius: 100%;
    margin-left: auto;
    margin-right: 4vh;
    background-color: rgb(53, 170, 53);
    align-self: center;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
  }
  
  .musicsApresentationContainer a:hover{
    position: relative;
    top: 0.2vh;
  }

  .musicsApresentationContainer a:active{
    background-color: green;
  }
`