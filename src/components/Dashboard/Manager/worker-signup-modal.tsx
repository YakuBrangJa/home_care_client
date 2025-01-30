import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {Button, buttonVariants} from "@/components/ui/button";
import {createSignal, For, JSX, Setter, Show, splitProps} from "solid-js";
import {TextField, TextFieldLabel, TextFieldRoot} from "@/components/ui/textfield";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {TextArea} from "@/components/ui/textarea";
import {cn} from "@/libs/cn";
import {SERVICE_TYPES} from "@/utils/const";
import {TbFolderUp, TbPlus} from "solid-icons/tb";
import {DialogTriggerProps} from "@kobalte/core/dialog";


const Label = (props: JSX.LabelHTMLAttributes<HTMLLabelElement>) => {
  const [local, rest] = splitProps(props, ['class']);
  return (
    <label class={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", local.class)}{...rest} />
  )
}

const WorkerSignupModal = () => {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Dialog open={isOpen()} onOpenChange={setIsOpen}>
      <DialogTrigger
        as={(props: DialogTriggerProps) => (
          <Button {...props} class="gap-2 pl-3">
            <TbPlus size={16} />
            Signup Worker
          </Button>
        )}
      />
      <DialogContent class="rounded-xl border bg-card text-card-foreground shadow p-6 ">
        <WorkerSignupForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}


const WorkerSignupForm = (props: {
  setIsOpen: Setter<boolean>
}) => {

  return (
    <form>
      <DialogHeader>
        <DialogTitle>Signup Worker</DialogTitle>
      </DialogHeader>
      <div class="mt-6 grid gap-3">
        <Label>Profile picture</Label>
        <div class="flex items-center gap-4">
          <img src="" class="size-[5rem] rounded-full border" />
          <label for='worker_profle_upload' class={buttonVariants({variant: 'outline', class: 'cursor-pointer'})}>
            <input type="file" class="hidden" id="worker_profle_upload" />
            <TbFolderUp class="mr-3" size={16} />
            Upload photo
          </label>
        </div>
      </div>
      <div class="mt-6 grid gap-6">
        <div class="grid grid-cols-2 gap-4">
          <TextFieldRoot class="">
            <TextFieldLabel>First name</TextFieldLabel>
            <TextField placeholder="First name" />
          </TextFieldRoot>
          <TextFieldRoot class="">
            <TextFieldLabel>Last name</TextFieldLabel>
            <TextField placeholder="Last name" />
          </TextFieldRoot>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <TextFieldRoot>
            <TextFieldLabel>Phone</TextFieldLabel>
            <TextField type="tel" placeholder="" />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldLabel>Email</TextFieldLabel>
            <TextField type="mail" placeholder="" />
          </TextFieldRoot>
        </div>
        <div class="grid gap-2">
          <Label>Expertise</Label>
          <Select
            options={SERVICE_TYPES}
            placeholder="Area"
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
            defaultValue="gardening"
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
          <TextFieldRoot>
            <TextFieldLabel>Address</TextFieldLabel>
            <TextArea placeholder="Your full address" />
          </TextFieldRoot>
        </div>
      </div>
      <DialogFooter class="mt-6">
        <Button class="w-full" variant="secondary"
          onClick={() => props.setIsOpen(false)}
        >Cancel</Button>
        <Button class="w-full">Signup</Button>
      </DialogFooter>
    </form>
  );
};

export default WorkerSignupModal

