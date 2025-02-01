import Layout from "@/Pages/client/dashboard/_layout";
import ProfilePage from "@/Pages/client/dashboard/profile.page";
import RequestServicePage from "@/Pages/client/dashboard/request-service.page";
import ClientServiceHistory from "@/Pages/client/dashboard/service-history.page";
import {Navigate, Route} from "@solidjs/router"

function UserDashboard () {
  return (
    <Route path='/user' component={Layout}>
      <Route path='/' component={() => <Navigate href='/user/profile' />} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/request-service' component={RequestServicePage} />
      <Route path='/service-history' component={ClientServiceHistory} />
    </Route>
  )
}

export default UserDashboard;