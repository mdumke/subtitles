import React from 'react'

const TranslationsTableRow = props => {
  return (
    <tr
      onClick={() => props.onSelect(props.index)}
      className={props.highlight ? 'table-info' : ''}>
      <th scope='row'>{props.index + 1}</th>
      <td>{props.translation.en}</td>
      <td>{props.translation.de}</td>
      <td>{props.translation.tr}</td>
    </tr>
  )
}

export default TranslationsTableRow
