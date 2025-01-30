import {Route, Router} from '@solidjs/router'

import MailUI from './components/MailUI'
import DashboardPage from '@/Pages/dashboard/_page'
import ClientPage from '@/Pages/client/_page'

function App() {

  return (
    <Router>
      <DashboardPage />
      <ClientPage />
      <Route path='/mail' component={MailUI} />
    </Router>
  )
}

export default App
