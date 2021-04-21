/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Aside} from '../styles/menuStyled'
import {FaHome, FaSearch, FaMusic} from 'react-icons/fa'

function active(e){
  const el = document.getElementsByClassName('active')
  el[0].classList.remove('active')
  e.target.classList.add('active')
}

export default () =>
  <>
    <Aside className="teste">
      <nav>
        <ul>
          <a href="#" onClick={active}><li className="active activeHome"> <FaHome className="FaHome"/> Início </li></a>
          <a href="#" onClick={active}><li className="activeSearch"> <FaSearch className="FaSearch"/> Buscar </li></a>
          <a href="#" onClick={active}><li className="activeMusic"> <FaMusic className="FaMusic"/> Minhas Playlist </li></a>
        </ul>
      </nav>
    </Aside>
  </>