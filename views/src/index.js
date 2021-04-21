import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Search from './search';
import GlobalStyle from './styles/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <div className="MainContainer">
    <Home />
    <GlobalStyle/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

renderSearch()

function renderSearch(){
  document.getElementsByClassName('activeSearch')[0].onclick = function(){
    ReactDOM.render(
      <React.StrictMode>
        <div className="MainContainer">
        <Search />
        <GlobalStyle/>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    )
    document.getElementsByClassName('activeSearch')[0].classList.add('active')
    document.getElementsByClassName('activeHome')[0].classList.remove('active')

    renderHome()
  }
}

function renderHome(){
  document.getElementsByClassName('activeHome')[0].onclick = function(){
    ReactDOM.render(
      <React.StrictMode>
        <div className="MainContainer">
        <Home />
        <GlobalStyle/>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    )
    document.getElementsByClassName('activeHome')[0].classList.add('active')
    document.getElementsByClassName('activeSearch')[0].classList.remove('active')

    renderSearch()
  }
}