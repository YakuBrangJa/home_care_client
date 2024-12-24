import {Route, Router} from '@solidjs/router'

import MailUI from './components/MailUI'
import DashboardPage from '@/Pages/dashboard/_page'

function App() {

  return (
    <Router>
      <DashboardPage />
      <Route path='/mail' component={MailUI} />
    </Router>
  )
}

export default App
