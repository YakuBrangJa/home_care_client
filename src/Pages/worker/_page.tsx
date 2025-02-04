import Layout from "@/Pages/worker/_layout"
import TaskHistory from "@/Pages/worker/task-history.page"
import WorkerLogin from "@/Pages/worker/worker-login.page"
import Tasks from "@/Pages/worker/worker-tasks.page"
import {Navigate, Route} from "@solidjs/router"

function WorkerPage () {
  return (
    <Route path='/worker' component={Layout}>
      <Route path="/" component={() => <Navigate href='/worker/login' />} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/task-history" component={TaskHistory} />
      <Route path="/login" component={WorkerLogin} />
    </Route>
  )
}

export default WorkerPage