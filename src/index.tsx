import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Cart from './context'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cart>
        <App />
      </Cart>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
