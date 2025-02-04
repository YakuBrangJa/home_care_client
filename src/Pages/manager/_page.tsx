import Layout from "@/Pages/manager/_layout"
import ManageWorker from "@/Pages/manager/manage-worker.page"
import ServiceRequests from "@/Pages/manager/manage-services.page"
import {Navigate, Route} from "@solidjs/router"
import ManagerLogin from "@/Pages/manager/manager-login.page"

function ManagerPage () {
  return (
    <Route path='/manager' component={Layout}>
      <Route path={'/'} component={() => <Navigate href='/manager/login' />} />
      <Route path='/manage-services' component={ServiceRequests} />
      <Route path='/manage-workers' component={ManageWorker} />
      <Route path='/login' component={ManagerLogin} />
    </Route>
  )
}

export default ManagerPage;