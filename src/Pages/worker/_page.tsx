import Layout from "@/Pages/worker/_layout"
import TaskHistory from "@/Pages/worker/task-history.page"
import Tasks from "@/Pages/worker/worker-tasks.page"
import {Navigate, Route} from "@solidjs/router"

function WorkerPage () {
  return (
    <Route path='/worker' component={Layout}>
      <Route path="/" component={() => <Navigate href='/worker/tasks' />} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/task-history" component={TaskHistory} />
    </Route>
  )
}

export default WorkerPage