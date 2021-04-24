/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
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

function getTotalTimeMusic(){
  let music = document.getElementsByClassName('musicPlay')

  let data = new Date(null)
  data.setSeconds(music[0].duration)
  let duracao = data.toISOString().substr(12, 8)
  duracao = duracao.split('.')
  duracao = duracao[0]
  duracao = duracao.split(':')
  duracao = duracao[1] + ':' + duracao[2]

  return duracao
}

function getMaxTimeMusicInSeconds(){
  let music = document.getElementsByClassName('musicPlay')

  return music[0].duration
}

function getTimeNow(){
  let music = document.getElementsByClassName('musicPlay')

  let data = new Date(null)
  data.setSeconds(music[0].currentTime)
  let duracao = data.toISOString().substr(12, 8)
  duracao = duracao.split('.')
  duracao = duracao[0]
  duracao = duracao.split(':')
  duracao = duracao[1] + ':' + duracao[2]

  return duracao
}

export default () => {

  const [timeNow, setTimeNow] = useState(0) 

  let time = setInterval(() =>{
    let music = document.getElementsByClassName('musicPlay')
    setTimeNow(getTimeNow())

    let range = document.getElementsByClassName('range')
    range[0].value = music[0].currentTime

    if(music[0].paused){
      clearInterval(time)
    }

    range[0].onchange = function(){
      music[0].currentTime = range[0].value
    }

  }, 1000)

  return(
    <FooterPlayStyled>
      <img src={getLogoMusicJpg()} alt="Logo music"/>
      <div className="titles">
        <p className="titleMusic"> {getTitleMusic()} </p>
        <p className="titleArtist"> {getAlbumArtist()} </p>
      </div>
      <div className="playMenu">
        <div className="btnsControlsContainer">

        </div>
        <div className="progressContainer">
          <span className="time"> {timeNow} </span> <input className="range" type="range" step="any" min="0" max={getMaxTimeMusicInSeconds()}/> <span className="time"> {getTotalTimeMusic()} </span>
        </div>
      </div>
    </FooterPlayStyled>
  )
}