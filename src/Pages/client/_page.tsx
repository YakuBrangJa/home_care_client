import {Navigate, Route} from "@solidjs/router"
import Layout from "@/Pages/client/_layout";
import LandingPage from "@/Pages/client/landing.page";
import UserDashboard from "@/Pages/client/dashboard/_page";

function ClientPage () {
  return (
    <Route path='/' component={Layout}>
      <Route path={'/'} component={() => <Navigate href='/home' />} />
      <Route path='/home' component={LandingPage} />
      <UserDashboard />
    </Route>
  )
}

export default ClientPage;