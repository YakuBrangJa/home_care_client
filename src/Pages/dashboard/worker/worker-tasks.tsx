import TaskDetailPanel from "@/components/Dashboard/Worker/task-detail-panel";
import TaskCard from "@/components/Dashboard/Worker/task-list-card";
import {Resizable, ResizableHandle, ResizablePanel} from "@/components/ui/resizable";
import {WorkerTaskProvider} from "@/context/worker-dashboard.contex";
import {createRandomServiceRequests} from "@/libs/faker";
import {cookieStorage, makePersisted} from "@solid-primitives/storage";
import {createSignal, For} from "solid-js";

const tasks = Array.from({length: 10}, createRandomServiceRequests);

function Tasks () {
  const [sizes, setSizes] = makePersisted(createSignal<number[]>([]), {
    name: "task-view",
    storage: cookieStorage,
    storageOptions: {
      path: "/",
    },
  });

  return (
    <WorkerTaskProvider>
      <Resizable sizes={sizes()} onSizesChange={setSizes} class="h-[calc(100%-52px)]">
        <ResizablePanel initialSize={sizes()[1] ?? 0.5} minSize={0.4}>
          <div class="px-4 h-[52px] flex items-center">
            <h1 class="text-xl font-semibold">Recent Tasks</h1>
          </div>
          {/* <Separator /> */}
          <div class="overflow-y-auto custom-scroll h-[calc(100vh-6.75rem)] flex flex-col gap-2 p-4 pt-1">
            <For each={tasks}>
              {(task) => (
                <TaskCard task={task} />
              )}
            </For>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel initialSize={sizes()[1] ?? 0.5} minSize={0.475} class="h-[calc(100vh-52px)]">
          <TaskDetailPanel />
        </ResizablePanel>
      </Resizable>
    </WorkerTaskProvider>
  )
}

export default Tasks