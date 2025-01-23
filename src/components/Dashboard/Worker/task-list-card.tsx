import {Badge} from "@/components/ui/badge"
import {useWorkerTask} from "@/context/worker-dashboard.contex"
import {cn} from "@/libs/cn"
import {Service} from "@/types/app.type"
import {ServiceIcons} from "@/utils/consts"
import {timeAgo} from "@/utils/utils"
import {TbFlag3} from "solid-icons/tb"
import {splitProps} from "solid-js"
import {Dynamic} from "solid-js/web"

interface TaskCardProps {
  task: Service
}

function TaskCard (props: TaskCardProps) {
  const [{task}, rest] = splitProps(props, ['task'])

  const worker = useWorkerTask()

  return (
    <button
      type="button"
      class={cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
        worker?.selected()?._id === task._id && "bg-muted",
      )}
      onClick={() => worker?.setSelected(task)}
    >
      <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <div class={cn("font-semibold line-clamp-1",
              worker?.selected()?._id === task._id && "text-primary",
            )}>{task.subject}</div>
          </div>
          <div
            class={cn(
              "w-[7rem] text-end ml-auto text-xs",
            )}
          >
            {timeAgo(new Date(task.requestTime))}
          </div>
        </div>
        <div class="text-xs font-medium">Manager: {task.manager?.name}</div>
      </div>
      <div class="line-clamp-2 text-xs text-muted-foreground">
        {task.description.substring(0, 300)}
      </div>
      <div class="flex items-center gap-2 mt-1">
        <Badge variant='outline' class="gap-1.5 pl-2">
          <Dynamic component={ServiceIcons[task.label]} />
          <span class="inline-block first-letter:uppercase">
            {task.label}
          </span>
        </Badge>
        <Badge urgency={task.urgency}>
          <TbFlag3 size={16} />
          <span class="inline-block first-letter:uppercase">
            {task.urgency}
          </span>
        </Badge>
      </div>
    </button>
  )
}

export default TaskCard;