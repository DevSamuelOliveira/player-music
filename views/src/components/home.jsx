/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Main from '../styles/mainStyled'

const hour = 12
const minute = new Date().getMinutes()

var msg = ""
var string = hour.toString() + ":" + minute.toString()

if (hour >= 6 && hour <= 12){
  msg = "Bem vindo, bom dia!"
  if(hour === 12 && string[4] !== '0'){
    msg = "Bem vindo, boa tarde!"
  }
}else if(hour >= 12 && hour <= 18){
  msg = "Bem vindo, boa tarde!"
  if(hour === 18 && string[4] !== '0'){
    msg = "Bem vindo, boa noite"
  }
}

export default () =>
  <>
    <Main>
      <div className="homeContainer">
        <h3 > {msg} </h3>
      </div>
    </Main>
  </>