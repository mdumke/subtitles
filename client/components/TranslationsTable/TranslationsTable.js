import React, { Component } from 'react'

import TranslationsTableRow from '../TranslationsTableRow/TranslationsTableRow'

class TranslationsTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: -1,
      translations: [
        {
          en: 'He has',
          de: 'Der Hase'
        },
        {
          en: 'She has',
          de: 'Der Skihase'
        },
        {
          en: 'The wizard of Oz',
          de: 'Das Wiesel aus dem Osten'
        }
      ]
    }
  }

  // updates the index and informs via the socket
  handleSelection (newIndex) {
    this.setState({
      currentIndex: newIndex
    })

    const update = {
      newIndex: newIndex,
      translations: this.state.translations[newIndex]
    }

    socket.emit('position-update', update)
  }

  handleKeyboardNavigation ({ keyCode }) {
    const upArrowCode = 38
    const downArrowCode = 40

    if (keyCode === upArrowCode && this.state.currentIndex > -1) {
      this.handleSelection(this.state.currentIndex - 1)
    }

    if (keyCode === downArrowCode && this.state.currentIndex < this.state.translations.length) {
      this.handleSelection(this.state.currentIndex + 1)
    }
  }

  render () {
    const tableRows = this.state.translations.map((translation, i) => {
      return <TranslationsTableRow
        onSelect={this.handleSelection.bind(this)}
        key={i}
        index={i}
        highlight={i === this.state.currentIndex}
        translation={translation} />
    })

    return (
      <table
        onKeyDown={key => this.handleKeyboardNavigation(key)}
        tabIndex="0">
        <thead>
          <tr>
            <th />
            <th>Kanal 1 (English)</th>
            <th>Kanal 2 (Deutsch)</th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    )
  }
}

export default TranslationsTable
