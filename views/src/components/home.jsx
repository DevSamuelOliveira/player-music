/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Main from '../styles/mainStyled'

const hour = new Date().getHours()
const minute = new Date().getMinutes()

var msg = ""
var string = hour.toString() + ":" + minute.toString()

if (hour >= 6 && hour <= 12){
  msg = "Bem vindo, bom dia!"
  if(hour === 12 && string[4] !== '0'){
    msg = ""
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