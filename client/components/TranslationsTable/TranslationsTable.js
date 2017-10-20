import React, { Component } from 'react'

import TranslationsTableRow from '../TranslationsTableRow/TranslationsTableRow'

class TranslationsTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      translations: [
        {
          id: 1,
          en: 'He has',
          de: 'Der Hase'
        },
        {
          id: 2,
          en: 'She has',
          de: 'Der Skihase'
        },
        {
          id: 3,
          en: 'The wizard of Oz',
          de: 'Das Wiesel aus dem Osten'
        }
      ]
    }
  }

  render () {
    const tableRows = this.state.translations.map(translation => {
      return <TranslationsTableRow key={translation.id} translation={translation} />
    })

    return (
      <table>
        <thead>
          <tr>
            <th></th>
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
