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

  .progressContainer{
    margin: auto 0;
  }

  .time{
    font-size: 70%;
    font-weight: 100;
    color:rgb(189, 189, 189)
  }

  .range{
    -webkit-appearance: none;
    margin: 0 1vh;
    margin-top: 5vh;
    width: 75vh;
    height: 1vh;
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
