/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import phoenixCoverTjBrownAndLunity from './music/phoenix_league_of_legends_acoustic_tj_brown_lunity_4284560954436008959.mp3'

window.onload = () =>{  
  document.getElementsByClassName('btnMostPlayed')[0].onclick = function(){
    document.getElementsByClassName('musicPlay')[0].play();
  }
}

export default () =>
  <React.Fragment>
    <audio className="musicPlay" src={phoenixCoverTjBrownAndLunity}></audio>
  </React.Fragment>
