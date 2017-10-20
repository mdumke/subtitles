import React from 'react'

import TranslationsTable from '../TranslationsTable/TranslationsTable'

const AdminInterface = () => {
  return (
    <div>
      <div className='navigation'>
        <nav className='navbar navbar-dark bg-dark'>
          <span className='navbar-brand' href='#'>Subtitles / admin</span>
        </nav>
      </div>

      <TranslationsTable />
    </div>
  )
}

export default AdminInterface
