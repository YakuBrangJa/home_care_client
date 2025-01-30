import Layout from "@/Pages/dashboard/worker/_layout"
import TaskHistory from "@/Pages/dashboard/worker/task-history.page"
import Tasks from "@/Pages/dashboard/worker/worker-tasks.page"
import {Navigate, Route} from "@solidjs/router"

function WorkerPage() {
  return (
    <Route path='worker' component={Layout}>
      <Route path="/" component={() => <Navigate href='/dashboard/worker/tasks' />} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/task-history" component={TaskHistory} />
    </Route>
  )
}

export default WorkerPage