/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import FooterPlayStyled from '../styles/footerPlayStyled'

function getLogoMusicJpg(){
  let music = document.getElementsByClassName('musicPlay')
  let string = music[0].src.split('media/')
  string = string[1]
  string = string.split('.')
  string = '/img/logosMusic/' + string[0] + ".jpg"   

  return string
}

export default () =>
  <FooterPlayStyled>
    <img src={getLogoMusicJpg()} alt="Logo music"/>
    <div className="titles">
      <p className="titleMusic"> teste </p>
      <p className="titleArtist"> album, artist </p>
    </div>
  </FooterPlayStyled>