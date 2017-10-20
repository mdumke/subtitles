import React, { Component } from 'react'

import TranslationsTableRow from '../TranslationsTableRow/TranslationsTableRow'
const translations = require('../../../public/translations.json')

class TranslationsTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: -1,
      translations
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
        className="table table-sm table-bordered"
        onKeyDown={key => this.handleKeyboardNavigation(key)}
        tabIndex="0">
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Kanal 1 (Englisch)</th>
            <th scope='col'>Kanal 2 (Deutsch)</th>
            <th scope='col'>Kanal 3 (Türkisch)</th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    )
  }
}

export default TranslationsTable
