import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(<App />, document.querySelector('.app'))

socket.on('connect', () => {
  console.log('server-connection established')
})

socket.on('disconnect', () => {
  console.log('server-connection broken')
})
