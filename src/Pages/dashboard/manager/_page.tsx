import Layout from "@/Pages/dashboard/manager/_layout"
import ManageWorker from "@/Pages/dashboard/manager/manage-worker"
import ServiceHistory from "@/Pages/dashboard/manager/service-history"
import ServiceRequests from "@/Pages/dashboard/manager/manage-services"
import {Route} from "@solidjs/router"

function ManagerPage() {
  return (
    <Route path='/manager' component={Layout}>
      <Route path='/manage-services' component={ServiceRequests}/>
      <Route path='/service-history' component={ServiceHistory}/>
      <Route path='/manage-workers' component={ManageWorker}/>
    </Route>
  )
}

export default ManagerPage;