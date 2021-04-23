/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Main from '../styles/mainStyled'
import imgMostPlayed from '../components/img/maisTocadas.png'
import imgTraining from '../components/img/treino.png'
import Play from '../components/play'

const hour = new Date().getHours()
const minute = new Date().getMinutes()
var msg = ""
const string = hour.toString() + ":" + minute.toString()

if (hour >= 6 && hour <= 12){
  msg = "Bem vindo, bom dia!"
  if(hour === 12 && string[4] !== '0'){
    msg = "Bem vindo, boa tarde!"
  }
}else if(hour >= 12 && hour <= 18){
  msg = "Bem vindo, boa tarde!"
  if(hour === 18 && string[4] !== '0'){
    msg = "Bem vindo, boa noite!"
  }
}else if(hour >= 18 && hour <= 24){
  msg = "Bem vindo, boa noite!"
  if(hour === 24 && string[4] !== '0'){
    msg = "Bem vindo, boa madrugada!"
  }
}else(
  msg = "Bem vindo, boa madrugada!"
)

export default () =>
  <>
    <Main>
      <div className="homeContainer">
        <h3 > {msg} </h3>

        <div className="musicsApresentationContainer"> 
          <div className="mostPlayedContainer">
            <img src={imgMostPlayed} alt="Imagem das músicas mais tocadas"/>
            <p> As mais tocadas </p>
            <a href="#" className="btnMostPlayed">&#9656;</a>
          </div>

          <div className="ForTrainingContainer">
            <img src={imgTraining} alt="Imagem das músicas mais tocadas"/>
            <p> Para treinar </p>
            <a href="#" className="btnForTraining">&#9656;</a>
          </div>

        </div>
      </div>
    </Main>
    <Play/>
  </>
