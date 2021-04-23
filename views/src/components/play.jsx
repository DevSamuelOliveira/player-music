/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ReactDOM from 'react-dom';
import phoenixCoverTjBrownAndLunity from './music/phoenixLolAcousticTjbrownLunity.mp3'
import FooterPlay from './footerPlay'

window.onload = () =>{  
  document.getElementsByClassName('btnMostPlayed')[0].onclick = function(){

    ReactDOM.render(
      <React.StrictMode>
        <FooterPlay/>
      </React.StrictMode>, document.getElementById('footerPlay'))

    let music = document.getElementsByClassName('musicPlay')
    console.log(music)
    music[0].play(); 
  }
}

export default () =>
  <React.Fragment>
    <audio className="musicPlay" src={phoenixCoverTjBrownAndLunity}></audio>
  </React.Fragment>
