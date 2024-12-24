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
import {TextArea} from "@/components/ui/textarea"
import {TextFieldRoot} from "@/components/ui/textfield"
import {JSXElement, ParentProps, Setter, splitProps} from "solid-js";
import {ServiceDetail, Services} from "@/types/app.type";
import {Badge} from "@/components/ui/badge";
import WorkerAssignModal from "@/components/Dashboard/worker-assign-modal";

const ServiceIcons: Record<Services, () => JSXElement> = {
  gardening: () => <TbShovel size={16} />,
  carpentry: () => <IoHammerOutline size={15} />,
  plumbing: () => <TbBath size={15} />,
  electrical: () => <TbLogicAnd size={15} />,
  cleaning: () => <TbRazor size={15} />
}

const ServiceDetailSheet = (props: {
  isOpen: boolean
  setIsOpen: Setter<boolean>
  serviceData: ServiceDetail
}) => {
  const [{serviceData}, others] = splitProps(props, ['serviceData'])

  return (
    <Sheet
      open={props.isOpen}
      onOpenChange={(open) => props.setIsOpen(open)}
    >
      <SheetContent
        class="sm:max-w-[34rem] !h-[calc(100vh-2rem)] m-4 rounded-lg pb-2">
        <SheetHeader class="h-[3.35rem] flex flex-row items-center justify-between pl-5 pr-3">
          <SheetTitle>Request Details</SheetTitle>
          <CloseButton class={buttonVariants({variant: 'ghost', size: 'icon', class: 'text-gray-500'})}>
            <TbArrowBarRight size={20} />
          </CloseButton>
        </SheetHeader>
        <Separator />
        <div class="h-[calc(100%-3.35rem)] overflow-y-auto custom-scroll pb-5">
          <div class="px-7 mt-5 mb-2">
            <p class="text-[0.95rem] font-semibold">{serviceData.subject}</p>
          </div>
          <div class="space-y-5 py-6 px-7">
            <InfoList label="Service" icon={<TbTool size={18} />}>
              <div class="text-sm flex items-center gap-2">
                <Dynamic component={ServiceIcons[serviceData.type]} />
                <span class="inline-block first-letter:uppercase">
                  {serviceData.type}
                </span>
              </div>
            </InfoList>
            <InfoList label="Status" icon={<TbCircleCheck size={18} />}>
              <Badge>
                <span class="inline-block first-letter:uppercase">
                  Pending
                </span>
              </Badge>
            </InfoList>
            <InfoList label="Urgency" icon={<TbFlag3 size={18} />}>
              <Badge urgency={serviceData.urgency}>
                <span class="inline-block first-letter:uppercase">
                  {serviceData.urgency}
                </span>
              </Badge>
            </InfoList>
            <InfoList label="Requested date" icon={<TbCalendarEvent size={18} />}>
              <span class="inline-block first-letter:uppercase">
                {format(serviceData.time, 'dd MMM yyyy')}
              </span>
            </InfoList>
          </div>
          <div class="px-7 pt-2 pb-4">
            <p class="text-sm font-semibold mb-3">Description</p>
            <p class="text-sm text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{serviceData.description}</p>
          </div>
          <Separator />
          <div class="px-7 py-3">
            <p class="text-sm font-semibold mb-3">Customer Information</p>
            <div class="text-sm text-muted-foreground space-y-1.5 pl-2">
              <p>{serviceData.customerInfo.firstname} {serviceData.customerInfo.lastname}</p>
              <p>{serviceData.customerInfo.phone}</p>
              <p>{serviceData.customerInfo.email}</p>
              <p>{serviceData.customerInfo.address}</p>
            </div>
          </div>
          <Separator />
          <div class="px-7 pt-3 pb-4">
            <div class="flex items-center justify-between mb-3">
              <div class="text-sm font-semibold">Assigned Workers</div>
              <WorkerAssignModal />
            </div>
            <div class=" py-8 border rounded-lg flex flex-col gap-3 items-center justify-center">
              <p class="text-sm text-muted-foreground">No workers assigned yet!</p>
            </div>
            <div class="mt-3 flex items-center justify-end">
            </div>
          </div>
          {/* <Separator class="!w-[calc(100%-3.5rem)] mx-auto" /> */}
          <div class="px-7 pt-3 pb-4">
            <div class="flex items-center justify-between mb-3">
              <div class="text-sm font-semibold">Manager's Instruction</div>
            </div>
            <TextFieldRoot class="w-full">
              <TextArea
                rows={5}
                placeholder="Leave instruction for assignee" />
            </TextFieldRoot>
          </div>
          <SheetFooter class="px-7">
            <Button>Save Instructions</Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};



function InfoList (props: ParentProps<{
  label: string
  icon: JSXElement
}>) {
  return (
    <div class="flex items-center gap-2">
      <div class="text-sm flex items-center gap-2 w-[10rem] text-muted-foreground">
        {props.icon}
        {props.label}
      </div>
      <div class="text-sm">
        {props.children}
      </div>
    </div>
  )
}

export default ServiceDetailSheet
