import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {TextArea} from "@/components/ui/textarea"
import {TextField, TextFieldLabel, TextFieldRoot} from "@/components/ui/textfield"
import {cn} from "@/libs/cn"
import {SERVICE_TYPES, URGENCY_LIST} from "@/utils/const"
import {TbBan, TbSend} from "solid-icons/tb"
import {createSignal, Show} from "solid-js"

function RequestServicePage () {
  const [hasActiveRequest, setHasActiveRequest] = createSignal(true)


  return (
    <Show when={hasActiveRequest()}
      fallback={<ServiceRequestForm />}
    >
      <ActiveServiceRequest />
    </Show>
  )
}

const ServiceRequestForm = () => {
  return (
    <div class="p-4">
      <h2 class="font-semibold">Service Request Form</h2>
      <div class="grid gap-x-6 gap-y-5 mt-8">
        <TextFieldRoot>
          <TextFieldLabel>Subject</TextFieldLabel>
          <TextField placeholder="Enter a brief subject for your request" />
        </TextFieldRoot>
        <div class="grid gap-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Service
          </label>
          <Select
            options={SERVICE_TYPES}
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
            placeholder="Select the type of service needed"
          >
            <SelectTrigger>
              <SelectValue<string>>
                {(state) => state.selectedOption()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>
        <div class="grid gap-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Urgency
          </label>
          <Select
            options={URGENCY_LIST}
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
            placeholder="Select urgency level"
          >
            <SelectTrigger>
              <SelectValue<string>>
                {(state) => state.selectedOption()}
                {/* {(state) => (
                  <span class={cn(!state.selectedOption() ? 'text-muted-foreground' : '')}>
                    {state.selectedOption()}
                  </span>
                )} */}
              </SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>
        <TextFieldRoot>
          <TextFieldLabel>Description</TextFieldLabel>
          <TextArea placeholder="Provide detailed information about the issue" rows={4} />
        </TextFieldRoot>
      </div>
      <div class="flex justify-end mt-5">
        <Button class='gap-2'>
          <TbSend />
          Send Request
        </Button>
      </div>
    </div>
  )
}

const ActiveServiceRequest = () => {
  return (
    <div class="p-4">
      <h2 class="font-semibold">My Request</h2>
      <div class="mt-8">

      </div>
      <div class="flex justify-end gap-3 mt-5">
        <Button class='gap-2' variant="destructive">
          <TbBan size={16} />
          Cancel Request
        </Button>
        {/* <Button class='gap-2'>
          <TbSend size={15} />
          Send Request
        </Button> */}
      </div>
    </div>
  )
}

export default RequestServicePage