import Layout from "@/Pages/manager/_layout"
import ManageWorker from "@/Pages/manager/manage-worker.page"
import ServiceRequests from "@/Pages/manager/manage-services.page"
import {Navigate, Route} from "@solidjs/router"

function ManagerPage () {
  return (
    <Route path='/manager' component={Layout}>
      <Route path={'/'} component={() => <Navigate href='/manager/manage-services' />} />
      <Route path='/manage-services' component={ServiceRequests} />
      <Route path='/manage-workers' component={ManageWorker} />
      <Route path='/profile' component={ManageWorker} />
    </Route>
  )
}

export default ManagerPage;