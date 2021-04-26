/* eslint-disable import/no-anonymous-default-export */
export default function (){
    setTimeout(function(){
    let controls = document.getElementsByClassName('btnsControls')
    let music = document.getElementsByClassName('musicPlay')

    controls[2].onclick = function(){
    music[0].play()
    }
  }, 100)
}