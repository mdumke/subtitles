import React from 'react'

const TranslationsTableRow = (props) => {
  return (
    <tr>
      <td>{ props.translation.id }</td>
      <td>{ props.translation.en }</td>
      <td>{ props.translation.de }</td>
    </tr>
  )
}

export default TranslationsTableRow
