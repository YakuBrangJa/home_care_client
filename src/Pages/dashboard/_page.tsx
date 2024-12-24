import ManagerPage from "@/Pages/dashboard/manager/_page"
import WorkerPage from "@/Pages/dashboard/worker/_page"
import {Route} from "@solidjs/router"

function DashboardPage() {
  return (
    <Route path='/dashboard'>
      <ManagerPage />
      <WorkerPage />
    </Route>
  )
}

export default DashboardPage