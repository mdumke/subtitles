import React, { Component } from 'react'
import io from 'socket.io-client'

const greetings = {
  de: 'Einen Augenblick bitte...',
  en: 'Just a moment, please...',
  tr: 'Bir dakika, lütfen...'
}

class AudienceInterface extends Component {
  constructor (props) {
    super(props)

    this._lang = props.match.params.lang

    this._socket = io()

    this._socket.on('connect', () => {
      this._socket.emit('join', {
        lang: this._lang
      })
    })

    this._socket.on('new-text', ({ text }) => {
      this.setState({
        text
      })
    })

    this.state = {
      text: greetings[this._lang]
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
