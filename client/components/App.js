import React from 'react'
import { Route } from 'react-router-dom'

import AdminInterface from './AdminInterface/AdminInterface'
import AudienceInterface from './AudienceInterface/AudienceInterface'

const App = () => (
  <div>
    <Route exact path='/admin' component={AdminInterface} />
    <Route exact path='/' component={AudienceInterface} />
  </div>
)

export default App
