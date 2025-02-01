import {InfoListItem} from "@/components/Dashboard/service-detail-components"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Separator} from "@/components/ui/separator"
import {TextArea} from "@/components/ui/textarea"
import {TextField, FieldLabel, TextFieldRoot, FieldErrorMessage} from "@/components/ui/textfield"
import {Service, ServiceType, Urgency} from "@/types/app.type"
import {SERVICE_TYPES, URGENCY_LIST} from "@/utils/const"
import {ServiceIcons} from "@/utils/consts"
import {format} from "date-fns"
import {TbBan, TbCalendarEvent, TbCircleCheck, TbFlag3, TbSend, TbTool} from "solid-icons/tb"
import {createSignal, For, JSX, Setter, Show} from "solid-js"
import {Dynamic} from "solid-js/web"
import {createForm} from '@tanstack/solid-form'
import {faker} from "@faker-js/faker"
import CancelAlertDialog from "@/components/ui/cancel-alert-dialog"

type ServiceRequest = Omit<Service, 'customerInfo'>

const default_form = {
  _id: faker.string.uuid(),
  status: 'pending',
  requestTime: new Date(),
  assignedWorkers: [],
  subject: faker.lorem.sentence(),
  serviceType: 'carpentry',
  urgency: 'medium',
  description: faker.lorem.sentence({min: 20, max: 40}),
}

function RequestServicePage () {
  const [service, setService] = createSignal<ServiceRequest | null>(null)

  return (
    <Show when={service() !== null}
      fallback={<ServiceRequestForm setService={setService} />}
      keyed
    >
      <ActiveServiceRequest service={service()} setService={setService} />
    </Show>
  )
}

const ServiceRequestForm = (props: {
  setService: Setter<ServiceRequest | null>
}) => {
  const form = createForm<{
    subject: string,
    serviceType?: ServiceType,
    urgency?: Urgency,
    description: string
  }>(() => ({
    defaultValues: {
      subject: '',
      serviceType: undefined,
      urgency: undefined,
      description: ''
    },

    onSubmit: ({value}) => {
      props.setService({
        ...value,
        _id: faker.string.uuid(),
        status: 'pending',
        requestTime: new Date(),
        assignedWorkers: [],
      })
    }
  }))

  const submitHandler = (e: SubmitEvent) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return (
    <form class="p-4" onSubmit={submitHandler}>
      <h2 class="font-semibold">Service Request Form</h2>
      <div class="grid gap-x-6 gap-y-5 mt-5">
        <form.Field
          name="subject"
          validators={{
            onChange: ({value}) => !value ? "Subject is required." : undefined
          }}
        >
          {(field) => (
            <TextFieldRoot
              validationState={field().state.meta.errors.length ? "invalid" : 'valid'}
            >
              <FieldLabel for={field().name}>Subject</FieldLabel>
              <TextField
                id={field().name}
                name={field().name}
                value={field().state.value}
                onChange={e => field().handleChange(e.target.value)}
                placeholder="Enter a brief subject for your request"
              />
              <Show when={field().state.meta.errors}>
                <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
              </Show>
            </TextFieldRoot>
          )}
        </form.Field>

        <div class="grid gap-2">
          <form.Field
            name="serviceType"
            validators={{
              onChange: ({value}) => !value ? "Service type must be specified." : undefined
            }}
          >
            {(field) => (
              <Select
                id={field().name}
                name={field().name}
                value={field().state.value}
                onChange={value => value && field().handleChange(value)}
                options={SERVICE_TYPES}
                itemComponent={(props) => (
                  <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
                )}
                placeholder="Select the type of service needed"
                validationState={field().state.meta.errors.length ? "invalid" : 'valid'}
              >
                <FieldLabel for={field().name} class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Service
                </FieldLabel>
                <SelectTrigger>
                  <SelectValue<string>>
                    {(state) => state.selectedOption()}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </Select>
            )}
          </form.Field>
        </div>
        <div class="grid gap-2">
          <form.Field
            name="urgency"
            validators={{
              onChange: ({value}) => !value ? "Urgency level must be seleced." : undefined
            }}
          >
            {(field) => (
              <Select
                id={field().name}
                name={field().name}
                value={field().state.value}
                onChange={value => value && field().handleChange(value)}
                options={URGENCY_LIST}
                validationState={field().state.meta.errors.length ? "invalid" : 'valid'}
                  itemComponent={(props) => (
                    <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
                  )}
                  placeholder="Select urgency level"
                >
                <FieldLabel for={field().name} class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Urgency
                </FieldLabel>
                  <SelectTrigger>
                    <SelectValue<string>>
                      {(state) => state.selectedOption()}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </Select>
            )}
          </form.Field>
        </div>
        <form.Field
          name="description"
          validators={{
            onChange: ({value}) => !value ? "Description is required." : undefined
          }}
        >
          {(field) => (
            <TextFieldRoot
              validationState={field().state.meta.errors.length ? "invalid" : 'valid'}
            >
              <FieldLabel for={field().name}>Description</FieldLabel>
              <TextArea
                id={field().name}
                name={field().name}
                value={field().state.value}
                onChange={e => field().handleChange(e.target.value)}
                placeholder="Provide detailed information about the issue" rows={4}
              />
              <Show when={field().state.meta.errors}>
                <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
              </Show>
            </TextFieldRoot>
          )}
        </form.Field>
      </div>
      <div class="flex justify-end mt-5">
        <Button type="submit" class='gap-2'>
          <TbSend />
          Send Request
        </Button>
      </div>
    </form>
  )
}

const ActiveServiceRequest = ({service, setService}: {
  service: ServiceRequest
  setService: Setter<ServiceRequest | null>
}) => {
  return (
    <div class="p-4">
      <h2 class="font-semibold text-lg">My Request</h2>
      <div class="mt-5">
        <div>
          <div class="px-7 overflow-y-auto custom-scroll ">

            <div class="space-y-5 py-6 ">
              <InfoListItem label="Service" icon={<TbTool size={18} />}>
                <div class="text-sm flex items-center gap-2">
                  <Dynamic component={ServiceIcons[service.serviceType]} />
                  <span class="inline-block first-letter:uppercase">
                    {service.serviceType}
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
                <Badge urgency={service.urgency}>
                  <span class="inline-block first-letter:uppercase">
                    {service.urgency}
                  </span>
                </Badge>
              </InfoListItem>
              <InfoListItem label="Request date" icon={<TbCalendarEvent size={18} />}>
                <span class="inline-block first-letter:uppercase">
                  {format(service.requestTime, 'dd MMM yyyy')}
                </span>
              </InfoListItem>
              <InfoListItem label="End date" icon={<TbCalendarEvent size={18} />}>
                <span class="inline-block first-letter:uppercase">
                  {service.endTime && format(service.endTime, 'dd MMM yyyy')}
                </span>
              </InfoListItem>
            </div>
            <Separator />
            <div class=" pt-3 pb-4 ">
              <div class="text-sm font-semibold mb-3">Subject</div>
              <div class="text-[0.85rem] text-muted-foreground">{service.subject}</div>
              {/* <div class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{service.subject}</div> */}
            </div>
            {/* <Separator /> */}
            <div class=" pt-3 pb-4">
              <div class="text-sm font-semibold mb-3">Description</div>
              <p class="text-[0.85rem] text-muted-foreground px-4 py-3 border rounded-xl leading-[1.35rem]">{service.description}</p>
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
                when={service.assignedWorkers?.length > 0}
                fallback={
                  <div class=" py-8 border border-gray-300 border-dashed rounded-lg flex flex-col gap-3 items-center justify-center">
                    <div class="text-[0.85rem] text-muted-foreground">No workers assigned yet!</div>
                  </div>
                }
              >
                <ul class="">
                  <For each={service.assignedWorkers}>
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
      </div>
      <div class="flex justify-end gap-3 mt-4">
        <CancelAlertDialog
          title="Cancel Service?"
          description="This will cancel the service request process."
          class="flex-none"
          onConfirm={() => setService(null)} />
      </div>
    </div>
  )
}

export default RequestServicePage