import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <div className="MainContainer">
    <App />
    <GlobalStyle/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
