import React, { Component } from 'react'

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
      text: 'Gleich isset soweit'
    }
  }

  render () {
    return (
      <div>
        {this.state.text}
      </div>
    )
  }
}

export default AudienceInterface
