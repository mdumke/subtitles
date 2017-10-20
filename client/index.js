import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.querySelector('.app'))

socket.on('connect', () => {
  console.log('server-connection established')
})

socket.on('disconnect', () => {
  console.log('server-connection broken')
})
