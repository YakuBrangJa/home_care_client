import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@components/ui/sheet";
import {Separator} from "@/components/ui/separator"
import {CloseButton} from "@kobalte/core/dialog"
import {IoHammerOutline, TbArrowBarRight, TbBath, TbCalendarEvent, TbCircleCheck, TbFlag3, TbLogicAnd, TbRazor, TbShovel, TbTool} from "@/components/icons/Tabler.icons"
import {Button, buttonVariants} from "@/components/ui/button"
import {Dynamic} from "solid-js/web"
import {format} from "date-fns"
import {For, JSXElement, ParentProps, Setter, Show, splitProps} from "solid-js";
import {Service, ServiceType, } from "@/types/app.type";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CancelAlertDialog from "@/components/ui/cancel-alert-dialog";
import {InfoListItem} from "@/components/Dashboard/service-detail-components";

const ServiceIcons: Record<ServiceType, () => JSXElement> = {
  gardening: () => <TbShovel size={16} />,
  carpentry: () => <IoHammerOutline size={15} />,
  plumbing: () => <TbBath size={15} />,
  electrical: () => <TbLogicAnd size={15} />,
  cleaning: () => <TbRazor size={15} />
}

const ServiceHistorySheet = (props: {
  isOpen: boolean
  setIsOpen: Setter<boolean>
  serviceData: Service
}) => {
  const [{serviceData}, others] = splitProps(props, ['serviceData'])

  return (
    <Sheet
      open={props.isOpen}
      onOpenChange={(open) => props.setIsOpen(open)}
    >
      <SheetContent
        backdropOpacity={10}
        class="sm:!max-w-[32rem] !h-[calc(100vh-2rem)] m-4 rounded-lg pb-2 shadow-lg">
        <SheetHeader class="h-[3.35rem] flex flex-row items-center justify-between pl-5 pr-3">
          <SheetTitle>Service History</SheetTitle>
          <CloseButton class={buttonVariants({variant: 'ghost', size: 'icon', class: 'text-gray-500'})}>
            <TbArrowBarRight size={20} />
          </CloseButton>
        </SheetHeader>
        <Separator />
        <Tabs class="h-[calc(100vh-5rem)] pt-2">
          <TabsList class="w-[calc(100%-2rem)] mx-4">
            <TabsIndicator />
            <TabsTrigger
              value="info"
              class="text-zinc-600 dark:text-zinc-200"
            >
              Service Info
            </TabsTrigger>
            <TabsTrigger
              value="history"
              class="text-zinc-600 dark:text-zinc-200"
            >
              Billing Info
            </TabsTrigger>
          </TabsList>

          {/* 
          Service Detail Section 
        */}
          <TabsContent value="info" class="h-[calc(100%-3.35rem)] overflow-y-auto custom-scroll pb-5">
            <div class="px-7 mt-5 mb-2">
              <h2 class="text-[0.925rem] font-semibold">{serviceData.subject}</h2>
            </div>
            <div class="space-y-5 py-6 px-7">
              <InfoListItem label="Service" icon={<TbTool size={18} />}>
                <div class="text-sm flex items-center gap-2">
                  <Dynamic component={ServiceIcons[props.serviceData.serviceType]} />
                  <span class="inline-block first-letter:uppercase">
                    {props.serviceData.serviceType}
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
                <Badge urgency={props.serviceData.urgency}>
                  <span class="inline-block first-letter:uppercase">
                    {props.serviceData.urgency}
                  </span>
                </Badge>
              </InfoListItem>
              <InfoListItem label="Request date" icon={<TbCalendarEvent size={18} />}>
                <span class="inline-block first-letter:uppercase">
                  {format(props.serviceData.requestTime, 'dd MMM yyyy')}
                </span>
              </InfoListItem>
              <InfoListItem label="End date" icon={<TbCalendarEvent size={18} />}>
                <span class="inline-block first-letter:uppercase">
                  {props.serviceData.endTime && format(props.serviceData.endTime, 'dd MMM yyyy')}
                </span>
              </InfoListItem>
            </div>
            <div class="px-7 pt-2 pb-4">
              <p class="text-sm font-semibold mb-3">Description</p>
              <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{serviceData.description}</p>
            </div>
            <Separator />

            {/** 
           *  Customer Info
           */ }
            <div class="px-7 py-4">
              <p class="text-sm font-semibold mb-3">Customer Information</p>
              <div class="text-[0.835rem] text-muted-foreground space-y-1.5 pl-2">
                <p>{serviceData.customerInfo.firstname} {serviceData.customerInfo.lastname}</p>
                <p>{serviceData.customerInfo.phone}</p>
                <p>{serviceData.customerInfo.email}</p>
                <p>{serviceData.customerInfo.address}</p>
              </div>
            </div>
            <Separator />

            {/**
           * Worker Assignment Section
            */}
            <div class="px-7 pt-3 pb-5">
              <div class="flex items-center justify-between mb-3">
                <div class="text-sm font-semibold">Assigned Workers</div>
              </div>
              <Show
                when={serviceData.assignedWorkers.length > 0}
                fallback={
                  <div class=" py-8 border border-gray-300 border-dashed rounded-lg flex flex-col gap-3 items-center justify-center">
                    <div class="text-[0.85rem] text-muted-foreground">No workers assigned yet!</div>
                  </div>
                }
              >
                <ul class="">
                  <For each={serviceData.assignedWorkers}>
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
            <Separator />

            {/* 
           * Instruction Section
          */}
            <div class="px-7 pt-3 pb-4">
              <div class="flex items-center justify-between mb-3">
                <div class="text-sm font-semibold">Manager's Instruction</div>
              </div>
              <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{serviceData.description}</p>
            </div>
            <SheetFooter class="px-7 pt-2 flex justify-end">
              <CancelAlertDialog
                title="Cancel Service?"
                description="This will cancel the service process and will notify the user. You may provide reason for cancellation"
              />
            </SheetFooter>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};


export default ServiceHistorySheet

