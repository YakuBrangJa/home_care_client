
import {Separator} from "@/components/ui/separator"
import {IoHammerOutline, TbArrowBarRight, TbBath, TbCalendarEvent, TbCircleCheck, TbFlag3, TbLogicAnd, TbRazor, TbShovel, TbTool} from "@/components/icons/Tabler.icons"
import {Dynamic} from "solid-js/web"
import {format} from "date-fns"
import {For, JSXElement, ParentProps, Setter, Show, splitProps} from "solid-js";
import {Service, ServiceLabel, } from "@/types/app.type";
import {Badge} from "@/components/ui/badge";
import {InfoListItem} from "@/components/Dashboard/service-detail-components";
import {useWorkerTask} from "@/context/worker-dashboard.contex";
import UndrawNoteList from "@/assets/undraw-note-list";
import {Button} from "@/components/ui/button";
import {TbPlayerPlayFilled, TbPlayerRecordFilled, TbTrashX} from "solid-icons/tb";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {TooltipTriggerProps} from "@kobalte/core/tooltip";

const ServiceIcons: Record<ServiceLabel, () => JSXElement> = {
  gardening: () => <TbShovel size={16} />,
  carpentry: () => <IoHammerOutline size={15} />,
  plumbing: () => <TbBath size={15} />,
  electrical: () => <TbLogicAnd size={15} />,
  cleaning: () => <TbRazor size={15} />
}

const TaskDetailPanel = () => {
  const worker = useWorkerTask()

  return (
    <Show
      when={worker?.selected()}
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
            <Button class="gap-2 pl-3">
              {/* <TbPlayerRecordFilled size={15} /> */}
              <TbPlayerPlayFilled size={15} />
              Start Task
            </Button>
          </div>
        </div>
        <Separator />
        <div class="px-7 h-[calc(100vh-106px)] overflow-y-auto custom-scroll ">
          <div class=" mt-5 mb-2">
            <h2 class="text-[0.925rem] font-semibold">{worker?.selected()?.subject}</h2>
          </div>
          <div class="space-y-5 py-6 ">
            <InfoListItem label="Service" icon={<TbTool size={18} />}>
              <div class="text-sm flex items-center gap-2">
                <Dynamic component={ServiceIcons[worker?.selected()?.label]} />
                <span class="inline-block first-letter:uppercase">
                  {worker?.selected()?.label}
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
              <Badge urgency={worker?.selected()?.urgency}>
                <span class="inline-block first-letter:uppercase">
                  {worker?.selected()?.urgency}
                </span>
              </Badge>
            </InfoListItem>
            <InfoListItem label="Request date" icon={<TbCalendarEvent size={18} />}>
              <span class="inline-block first-letter:uppercase">
                {format(worker?.selected()?.requestTime, 'dd MMM yyyy')}
              </span>
            </InfoListItem>
            <InfoListItem label="End date" icon={<TbCalendarEvent size={18} />}>
              <span class="inline-block first-letter:uppercase">
                {worker?.selected()?.endTime && format(worker?.selected()?.endTime, 'dd MMM yyyy')}
              </span>
            </InfoListItem>
          </div>
          <Separator />
          <div class=" pt-3 pb-4">
            <p class="text-sm font-semibold mb-3">Description</p>
            <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{worker?.selected()?.description}</p>
          </div>
          <Separator />
          {/* 
           * Instruction Section
          */}
          <div class=" pt-3 pb-4">
            <div class="flex items-center justify-between mb-3">
              <div class="text-sm font-semibold">Manager's Instruction</div>
            </div>
            <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{worker?.selected()?.description}</p>
          </div>
          <Separator />

          {/** 
           *  Customer Info
           */ }
          <div class=" py-4">
            <p class="text-sm font-semibold mb-3">Customer Information</p>
            <div class="text-[0.835rem] text-muted-foreground space-y-1.5 pl-2">
              <p>{worker?.selected()?.customerInfo?.firstname} {worker?.selected()?.customerInfo?.lastname}</p>
              <p>{worker?.selected()?.customerInfo?.phone}</p>
              <p>{worker?.selected()?.customerInfo?.email}</p>
              <p>{worker?.selected()?.customerInfo?.address}</p>
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
              when={worker?.selected()?.assignedWorkers.length > 0}
              fallback={
                <div class=" py-8 border border-gray-300 border-dashed rounded-lg flex flex-col gap-3 items-center justify-center">
                  <div class="text-[0.85rem] text-muted-foreground">No workers assigned yet!</div>
                </div>
              }
            >
              <ul class="">
                <For each={worker?.selected()?.assignedWorkers}>
                  {(worker, idx) => (
                    <li class="group flex rounded-md items-center gap-3 py-2 px-2.5 pr-5 w-full cursor-pointer">
                      <img src={worker.profileImgUrl} alt="" class="rounded-full border size-[37px]" />
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

