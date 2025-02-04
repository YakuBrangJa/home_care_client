
import {Separator} from "@/components/ui/separator"
import {IoHammerOutline, TbArrowBarRight, TbBath, TbCalendarEvent, TbCircleCheck, TbFlag3, TbLogicAnd, TbRazor, TbShovel, TbTool} from "@/components/icons/Tabler.icons"
import {Dynamic} from "solid-js/web"
import {format} from "date-fns"
import {createEffect, createSignal, For, JSXElement, Match, ParentProps, Setter, Show, splitProps, Switch} from "solid-js";
import {Service, ServiceType, } from "@/types/app.type";
import {Badge} from "@/components/ui/badge";
import {InfoListItem} from "@/components/Dashboard/service-detail-components";
import {useWorkerTask} from "@/context/worker-dashboard.contex";
import UndrawNoteList from "@/assets/undraw-note-list";
import {Button} from "@/components/ui/button";
import {TbCheck, TbCheckbox, TbPlayerPlayFilled, TbPlayerRecordFilled, TbTrashX} from "solid-icons/tb";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {TooltipTriggerProps} from "@kobalte/core/tooltip";
import Avatar from "@/components/ui/avatar";

const ServiceIcons: Record<ServiceType, () => JSXElement> = {
  gardening: () => <TbShovel size={16} />,
  carpentry: () => <IoHammerOutline size={15} />,
  plumbing: () => <TbBath size={15} />,
  electrical: () => <TbLogicAnd size={15} />,
  cleaning: () => <TbRazor size={15} />
}

const TaskDetailPanel = () => {
  const {selected} = useWorkerTask()
  const [progress, setProgress] = createSignal<'assigned' | 'in-progress' | 'completed' | 'cancelled'>(selected()?.status)

  createEffect(() => {
    setProgress(selected().status)
  })

  return (
    <Show
      when={selected()}
      fallback={<NoSelectedTask />}
    >
      <div>
        <div class="px-3 h-[52px] flex items-center justify-between">
          <div>
            <Tooltip openDelay={150} closeDelay={0}>
              <TooltipTrigger
                as={(props: TooltipTriggerProps) => (
                  <Button
                    variant="ghost"
                    size="icon"
                    {...props}
                  >
                    <TbTrashX size={19} />
                  </Button>
                )}
              />
              <TooltipContent>Cancel Service</TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Switch
              fallback={
                <Button class="gap-2 pl-3"
                  onClick={() => setProgress('in-progress')}
                >
                  <TbPlayerPlayFilled size={15} />
                  Start Task
                </Button>
              }
            >
              <Match when={progress() === 'in-progress'}>
                <div class="flex items-center gap-3">
                  <div class="bg-warning/40 text-yellow-800 px-2 pr-3 py-1.5 rounded-2xl text-sm flex items-center gap-1.5 font-medium">
                    <TbPlayerRecordFilled />
                    Work in progress
                  </div>
                  <Button class="gap-2 pl-3"
                    onClick={() => setProgress('completed')}
                  >
                    <TbCheckbox size={17} />
                    {/* <TbPlayerPlayFilled size={15} /> */}
                    Mark as Complete
                  </Button>
                </div>
              </Match>
              <Match when={progress() === 'completed'}>
                <div class="flex items-center gap-3">
                  <div class="bg-emerald-300/40 text-emerald-700 px-2 pr-3 py-1.5 rounded-2xl text-sm flex items-center gap-1.5 font-medium">
                    <TbCheck size={18} />
                    Work Completed
                  </div>
                </div>
              </Match>

            </Switch>
          </div>
        </div>
        <Separator />
        <div class="px-7 h-[calc(100vh-106px)] overflow-y-auto custom-scroll ">
          <div class=" mt-5 mb-2">
            <h2 class="text-[0.925rem] font-semibold">{selected()?.subject}</h2>
          </div>
          <div class="space-y-5 py-6 ">
            <InfoListItem label="Service" icon={<TbTool size={18} />}>
              <div class="text-sm flex items-center gap-2">
                <Dynamic component={ServiceIcons[selected()?.serviceType]} />
                <span class="inline-block first-letter:uppercase">
                  {selected()?.serviceType}
                </span>
              </div>
            </InfoListItem>
            <InfoListItem label="Status" icon={<TbCircleCheck size={18} />}>
              <Badge>
                <span class="inline-block first-letter:uppercase">
                  Pending
                </span>
              </Badge>
            </InfoListItem>
            <InfoListItem label="Urgency" icon={<TbFlag3 size={18} />}>
              <Badge urgency={selected()?.urgency}>
                <span class="inline-block first-letter:uppercase">
                  {selected()?.urgency}
                </span>
              </Badge>
            </InfoListItem>
            <InfoListItem label="Request date" icon={<TbCalendarEvent size={18} />}>
              <span class="inline-block first-letter:uppercase">
                {format(selected()?.requestTime, 'dd MMM yyyy')}
              </span>
            </InfoListItem>
            <InfoListItem label="End date" icon={<TbCalendarEvent size={18} />}>
              <span class="inline-block first-letter:uppercase">
                {selected()?.endTime && format(selected()?.endTime, 'dd MMM yyyy')}
              </span>
            </InfoListItem>
          </div>
          <Separator />
          <div class=" pt-3 pb-4">
            <p class="text-sm font-semibold mb-3">Description</p>
            <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{selected()?.description}</p>
          </div>
          <Separator />
          {/* 
           * Instruction Section
          */}
          <div class=" pt-3 pb-4">
            <div class="flex items-center justify-between mb-3">
              <div class="text-sm font-semibold">Manager's Instruction</div>
            </div>
            <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{selected()?.description}</p>
          </div>
          <Separator />

          {/** 
           *  Customer Info
           */ }
          <div class=" py-4">
            <p class="text-sm font-semibold mb-3">Customer Information</p>
            <div class="text-[0.835rem] text-muted-foreground space-y-1.5 pl-2">
              <p>{selected()?.customerInfo?.firstname} {selected()?.customerInfo?.lastname}</p>
              <p>{selected()?.customerInfo?.phone}</p>
              <p>{selected()?.customerInfo?.email}</p>
              <p>{selected()?.customerInfo?.address}</p>
            </div>
          </div>
          <Separator />

          {/**
           * Worker Assignment Section
            */}
          <div class=" pt-3 pb-5">
            <div class="flex items-center justify-between mb-3">
              <div class="text-sm font-semibold">Assigned Workers</div>
            </div>
            <Show
              when={selected()?.assignedWorkers?.length > 0}
              fallback={
                <div class=" py-8 border border-gray-300 border-dashed rounded-lg flex flex-col gap-3 items-center justify-center">
                  <div class="text-[0.85rem] text-muted-foreground">No workers assigned yet!</div>
                </div>
              }
            >
              <ul class="">
                <For each={selected()?.assignedWorkers}>
                  {(worker, idx) => (
                    <li class="group flex rounded-md items-center gap-3 py-2 px-2.5 pr-5 w-full cursor-pointer">
                      {/* <img src={worker.profileImgUrl} alt="" class="rounded-full border size-[37px]" /> */}
                      <Avatar name={worker.firstname + ' ' + worker.lastname} size={37} />
                      <div class="pb-0.5">
                        <div class="text-[0.775rem] font-semibold">{worker.firstname} {worker.lastname}</div>
                        <div class="text-xs text-muted-foreground">{worker.phone}</div>
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>
        </div>
        <Separator />
      </div>
    </Show>
  );
};

const NoSelectedTask = () => {
  return (
    <div class="h-[90%] flex items-center justify-center p-3">
      <div class="flex flex-col items-center gap-2">
        <UndrawNoteList height={180} width={'100%'} />
        <div class="font-semibold mt-6">No Task Selected</div>
        <div class="text-sm text-gray-600">Select a task to see details</div>
      </div>
    </div>
  )
}

export default TaskDetailPanel

