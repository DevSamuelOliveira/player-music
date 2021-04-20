/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Aside} from '../styles/menuStyled'
import {FaHome, FaSearch, FaMusic} from 'react-icons/fa'

export default () =>
  <>
    <Aside className="teste">
      <nav>
        <ul>
          <a href="javascript:void(0)"><li> <FaHome className="FaHome"/> Início </li></a>
          <a href="javascript:void(0)"><li> <FaSearch className="FaSearch"/> Buscar </li></a>
          <a href="javascript:void(0)"><li> <FaMusic className="FaMusic"/> Minhas Playlist </li></a>
        </ul>
      </nav>
    </Aside>
  </>