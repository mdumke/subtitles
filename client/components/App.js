import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'
import AdminInterface from './AdminInterface/AdminInterface'
import AudienceInterface from './AudienceInterface/AudienceInterface'

const App = () => (
  <div>
    <Route exact path='/admin' component={AdminInterface} />
    <Route exact path='/lang/:lang' component={AudienceInterface} />
    <Route exact path='/' component={LandingPage} />
  </div>
)

export default App
