import ServiceDetailSheet from "@/components/Dashboard/service-detail-sheet"
import {IoHammerOutline, TbBath, TbLogicAnd, TbRazor, TbShovel} from "@/components/icons/Tabler.icons"
import {Badge} from "@/components/ui/badge"
import {cn} from "@/libs/cn"
import {ServiceDetail, Services} from "@/types/app.type"
import utils from "@/utils/utils"
import {createSignal,  JSXElement, ParentProps, splitProps} from "solid-js"
import {Dynamic} from "solid-js/web"


export function BoardColumn (props: ParentProps<{
  title: string
  tagColor: string
  count: number
}>) {
  return (
    <div class='flex-1 flex flex-col items-stretch'>
      <div class={cn("py-[0.5rem] px-4 pr-3 mx-4 rounded-md flex items-center justify-between", )} 
        style={{
          "background-color": props.tagColor + '44'
        }}
      >
        <span 
          class="text-sm font-semibold"
        style={{
        }}>
          {props.title}
        </span>
        <span class="rounded-md size-[1.4rem] text-sm flex items-center justify-center text-white"
          style={{
            "background-color": props.tagColor
          }}
        >{props.count}</span>
      </div>
      <div class="mt-3 space-y-3 h-full  overflow-y-auto custom-scroll px-4 pt-1 pb-3">
      {props.children}
      </div>
    </div>
  )
}

const ServiceIcons: Record<Services, () => JSXElement> = {
  gardening: () =>  <TbShovel size={15} />,
  carpentry: () => <IoHammerOutline size={14} />,
  plumbing: () => <TbBath size={13} />,
  electrical: () => <TbLogicAnd size={14} />,
  cleaning: () => <TbRazor size={14} />
}

export function Card(props: ParentProps<{
  serviceData: ServiceDetail
}>) {
  const [isOpen, setIsOpen] = createSignal(false)
  const [{serviceData}, others] = splitProps(props, ['serviceData'])
  return (
    <>
    <button
      type="button"
      class={cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm shadow-sm transition-all hover:bg-accent",
        isOpen() && "bg-muted",
      )}
      onClick={e => setIsOpen(true)}
    >
      <div class="flex w-full flex-col gap-1">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <div class="font-semibold line-clamp-1 max-w-[17rem]">{serviceData.subject}</div>
            {/* {!item.read && (
              <span class="flex h-2 w-2 rounded-full bg-blue-600" />
            )} */}
          </div>
          <div
            class={cn(
              "ml-auto text-xs text-muted-foreground",
            )}
          >
            {utils.timeAgo(serviceData.time)}
          </div>
        </div>
      </div>
      <div class="line-clamp-2 text-xs text-muted-foreground mt-1">
        {serviceData.description}
      </div>
      <div class="flex items-center gap-2">
        <Badge variant='outline' class="gap-1.5">
          <Dynamic component={ServiceIcons[serviceData.type]} />
          <span class="inline-block first-letter:uppercase">
          {serviceData.type}
          </span>
        </Badge>
        <Badge urgency={serviceData.urgency}>
          <span class="inline-block first-letter:uppercase">
            {serviceData.urgency}
          </span>
        </Badge>
      </div>
    </button>
      <ServiceDetailSheet isOpen={isOpen()} setIsOpen={setIsOpen} serviceData={serviceData} />
    </>
  )
}

