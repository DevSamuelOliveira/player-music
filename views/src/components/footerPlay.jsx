/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import FooterPlayStyled from '../styles/footerPlayStyled'
import infosMusics from '../infosMusics'

function getLogoMusicJpg(){
  let music = document.getElementsByClassName('musicPlay')
  let string = music[0].src.split('media/')
  string = string[1]
  string = string.split('.')
  string = '/img/logosMusic/' + string[0] + ".jpg"   

  return string
}

function getTitleMusic(){
  let name = getLogoMusicJpg()
  name = name.split('logosMusic/')
  name = name[1].replace('.jpg', '.mp3')

  return infosMusics[name].title
}

function getAlbumArtist(){
  let name = getLogoMusicJpg()
  name = name.split('logosMusic/')
  name = name[1].replace('.jpg', '.mp3')

  let album = infosMusics[name].album
  let artist = infosMusics[name].artist

  return album + ', ' + artist
}

function getTimeFullMusic(){

}

export default () =>
  <FooterPlayStyled>
    <img src={getLogoMusicJpg()} alt="Logo music"/>
    <div className="titles">
      <p className="titleMusic"> {getTitleMusic()} </p>
      <p className="titleArtist"> {getAlbumArtist()} </p>
    </div>
    <div className="playMenu">
      <progress min="0" max="100" value="66"> </progress>
    </div>
  </FooterPlayStyled> 