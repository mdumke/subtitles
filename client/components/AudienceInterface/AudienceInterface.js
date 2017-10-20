import React, { Component } from 'react'
import io from 'socket.io-client'

class AudienceInterface extends Component {
  constructor (props) {
    super(props)

    this._socket = io()

    this._socket.on('new-text', ({ text }) => {
      this.setState({
        text
      })
    })

    this.state = {
      text: 'Einen Augenblick Geduld, bitte.'
    }
  }

  render () {
    return (
      <div className='screen'>
        <div className='screen__content'>
          <h2 className='screen__text'>
            {this.state.text}
          </h2>
        </div>

        <div className='screen__background' />
      </div>
    )
  }
}

export default AudienceInterface
