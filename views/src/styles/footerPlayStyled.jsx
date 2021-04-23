import styled from 'styled-components'

export default styled.footer`
  width: 100%;
  height: 15vh;
  background-color: #141414;
  color: white;
  border-top: 0.1vh solid #222222;
  position: fixed;
  bottom: 0;
  display: flex;

  img{
    margin: 2.7vh;
  }

  .titles{
    margin: auto 0;
    display: flex;
    flex-direction: column;
  }

  .titles p{
    margin: 0;
    padding: 0;
  }

  .titleMusic{
    font-weight: bold;
  }

  .titleArtist{
    font-weight: 100;
    font-size: 90%;
  }

`
