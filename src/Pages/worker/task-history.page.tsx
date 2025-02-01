import TaskHistoryTable from "@/components/Dashboard/Worker/task-history-table"

function TaskHistory () {
  return (
    <div>
      <div class="flex items-center px-4 py-2 h-[52px]">
        <h1 class="text-lg font-semibold">Task History</h1>
      </div>
      <div class="px-4 py-2">
        <TaskHistoryTable />
      </div>
    </div>
  )
}

export default TaskHistory