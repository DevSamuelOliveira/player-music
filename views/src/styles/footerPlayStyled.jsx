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
    font-weight: 400;
  }

  .titleArtist{
    font-weight: 200;
    font-size: 90%;
    color: #a7a7a7;
    white-space: nowrap;
  }

  .playMenu{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 18vh;
  }

  .progressContainer{
    margin: auto 0;
  }

  span{
    font-size: 70%;
    font-weight: 100;
    color:rgb(189, 189, 189)
  }

  progress{
    margin: auto 1vh;
    height: 0.7vh;
    width: 80vh;
    -webkit-appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: rgb(90, 90, 90);
    border-radius: 0.4vh;
  }

  progress::-webkit-progress-value {
    background-color: rgb(189, 189, 189);
    border-radius: 0.4vh;
  }

`
