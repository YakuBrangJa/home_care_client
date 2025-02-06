import {Route, Router} from '@solidjs/router'

import ManagerPage from '@/Pages/manager/_page'
import WorkerPage from '@/Pages/worker/_page'
import ClientPage from '@/Pages/client/_page'
import AppProvider from '@/providers'

function App() {

  return (
    <AppProvider>
      <Router>
        <ClientPage />
        <ManagerPage />
        <WorkerPage />
      </Router>
    </AppProvider>
  )
}

export default App
