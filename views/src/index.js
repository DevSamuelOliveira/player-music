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

document.getElementsByClassName('activeSearch')[0].onclick = function(){
  console.log("Vamos botar pra quebrar")
}