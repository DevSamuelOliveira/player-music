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

  span{
    display: inline-block;
  }

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

  .btnsControlsContainer{
    margin-top: 2vh;
    margin-left: 20vh;
    font-size: 1.2em;
    color:rgb(143, 141, 141);
  }

  .btnsControls:hover{
    color: white;
  }

  .btnsControls{
    margin: 0 2vh;
  }

  .controlsPlay{
    color: black;
    background-color: white;
    border-radius: 50%;
    font-size: 1.5em;
  }

  .controlsPlay:hover{
    position: relative;
    top: 0.3vh;
    color: black;
  }

  .progressContainer{
    margin: auto 0;
    display: flex;
  }

  .time{
    font-size: 70%;
    font-weight: 100;
    color:rgb(189, 189, 189);

  }

  .range{
    -webkit-appearance: none;
    position: relative;
    top: 1vh;
    margin: 0 1vh;
    width: 75vh;
    height: 0.6vh;
    background-color: rgb(85, 85, 85);
    border-radius: 1vh;
  }

  .range::-webkit-slider-thumb{
    -webkit-appearance: none;
    background-color: rgb(211, 205, 205);
    width: 2vh;
    height: 2vh;
    border-radius: 50%;
  }

  .range::-moz-range-thumb{
    background-color: rgb(255, 255, 255);
    width: 1.5vh;
    height: 1.5vh;
    border-radius: 50%;
  }

  .range::-moz-range-progress{
    background-color: rgb(182, 181, 181);
  }
`
