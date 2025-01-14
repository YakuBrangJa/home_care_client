import ManageWorkerTable from "@/components/Dashboard/manage-worker-table"
import WorkerSignupModal from "@/components/Dashboard/worker-signup-modal"

function ManageWorker() {
  return (
    <div>
      <div class="flex items-center justify-between px-4 py-2 h-[52px]">
        <h1 class="text-lg font-semibold">Manage Workers</h1>
        <WorkerSignupModal />
      </div>
      <div class="m-0 flex-1 overflow-auto px-4 py-2">
        <ManageWorkerTable />
      </div>
    </div>
  )
}

export default ManageWorker