import React from 'react'
import { Route } from 'react-router-dom'

import AdminInterface from './AdminInterface/AdminInterface'
import AudienceInterface from './AudienceInterface/AudienceInterface'

const Blah = () => <div>Welcome to the show!</div>

const App = () => (
  <div>
    <Route exact path='/admin' component={AdminInterface} />
    <Route exact path='/lang/:lang' component={AudienceInterface} />
    <Route exact path='/' component={Blah} />
  </div>
)

export default App
