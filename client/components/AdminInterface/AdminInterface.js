import React from 'react'

import TranslationsTable from '../TranslationsTable/TranslationsTable'

const AdminInterface = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">Subtitles / admin</span>
      </nav>

      <TranslationsTable />
    </div>
  )
}

export default AdminInterface
