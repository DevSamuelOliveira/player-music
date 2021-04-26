/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ReactDOM from 'react-dom';
import phoenixCoverTjBrownAndLunity from './music/phoenixLolAcousticTjbrownLunity.mp3'
import FooterPlay from './footerPlay'
import {BsPause} from 'react-icons/bs'

window.onload = () =>{  
  document.getElementsByClassName('btnMostPlayed')[0].onclick = function(){

    ReactDOM.render(
        <FooterPlay/>
        , document.getElementById('footerPlay'))

    let music = document.getElementsByClassName('musicPlay')
    music[0].play(); 
  }
}

export default () =>
  <React.Fragment>
    <audio className="musicPlay" src={phoenixCoverTjBrownAndLunity}></audio>
  </React.Fragment>
