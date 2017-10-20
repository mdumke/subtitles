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

  handleSelection (newIndex) {
    this.setState({
      currentIndex: newIndex
    })
  }

  handleKeyboardNavigation ({ keyCode }) {
    // up-arrow
    if (keyCode === 38 && this.state.currentIndex > -1) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }

    // down-arrow
    if (keyCode === 40 && this.state.currentIndex < this.state.translations.length) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
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
