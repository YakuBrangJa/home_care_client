import {Navigate, Route} from "@solidjs/router"
import Layout from "@/Pages/client/_layout";
import LandingPage from "@/Pages/client/landing.page";
import UserDashboard from "@/Pages/client/dashboard/_page";
import SignInPage from "@/Pages/client/signin";
import SignUpPage from "@/Pages/client/signup";

function ClientPage () {

  return (
    <Route path='/' component={Layout}>
      <Route path={'/'} component={() => <Navigate href='/home' />} />
      <Route path='/home' component={LandingPage} />
      <UserDashboard />
      <Route path='/user/signin' component={SignInPage} />
      <Route path='/user/sign-up' component={SignUpPage} />
    </Route>
  )
}

export default ClientPage;