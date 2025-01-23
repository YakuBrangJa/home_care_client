import {

  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {Button} from "@/components/ui/button";
import {generateRandomWorker} from "@/libs/faker";
import {createSignal, For, Show} from "solid-js";
import {TextField, TextFieldRoot} from "@/components/ui/textfield";
import {Checkbox, CheckboxControl, CheckboxLabel} from "@/components/ui/checkbox";
import {Worker} from "@/types/app.type";
import {IoCloseOutline} from "@/components/icons/Ion.icons";
import {Separator} from "@/components/ui/separator";
import {DialogTriggerProps} from "@kobalte/core/dialog";
import {FaSolidPersonCirclePlus} from "solid-icons/fa";

const randomWorkers = Array.from({length: 30}, generateRandomWorker)

const WorkerAssignModal = () => {
  return (
    <Dialog>
      <DialogTrigger
        as={(props: DialogTriggerProps) => (
          <Button {...props} class="flex-1">
            <FaSolidPersonCirclePlus class="mr-2" size={17} />
            Assign
          </Button>
        )}
      />
      <DialogContent class="max-w-[46rem] h-[35rem]">
        <ModalContent />
      </DialogContent>
    </Dialog>
  )
}

const ModalContent = () => {
  const [selectedWorkers, setSelectedWorkers] = createSignal<Worker[]>([])

  const handleSelectWorker = (targetWorker: Worker, checked: boolean) => {
    setSelectedWorkers(prevValue => {
      if(checked) {
        return [...prevValue, targetWorker];
      } else {
        return prevValue.filter(worker => worker._id !== targetWorker._id);
      }
    });
  }


  return (
    <>
      <DialogHeader class="px-5 py-3 flex-grow-0">
        <DialogTitle class="text-center text-[0.925rem]">Assign Workers</DialogTitle>
      </DialogHeader>
      <Separator />
      <div class="flex ">
        <div class="flex-1 flex flex-col items-stretch">
          <div class="px-5 py-3">
            <TextFieldRoot class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-2 top-2.5 size-4 text-muted-foreground"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                />
                <title>Search</title>
              </svg>
              <TextField class="pl-8" placeholder="Search worker" />
            </TextFieldRoot>
          </div>
          <div class="flex-1 max-h-[28rem] p-5 py-2 overflow-y-auto custom-scroll">
            <For each={randomWorkers}>
              {(worker, idx) => (
                <Checkbox class="group flex rounded-md items-center gap-3  px-3 pr-5 w-full hover:bg-muted cursor-pointer"
                  onChange={checked => {
                    handleSelectWorker(worker, checked)
                  }}
                >
                  <CheckboxControl />
                  <CheckboxLabel class="group flex items-center gap-3 w-full py-2 cursor-pointer">
                    <img src={worker.profileImgUrl} alt="" class="rounded-full border size-[37px]" />
                    <div class="pb-0.5">
                      <div class="text-[0.8rem] font-medium">{worker.firstname} {worker.lastname}</div>
                      <div class="text-[0.725rem] text-muted-foreground">{worker.phone}</div>
                    </div>
                  </CheckboxLabel>
                </Checkbox>
              )}
            </For>
          </div>
        </div>
        <div class="w-[1px] bg-border"></div>
        {/* <Separator orientation="vertical" class="h-full" /> */}
        <div class="w-[22rem] bg-gray-50 flex flex-col items-stretch ">
          <div class="flex items-center justify-between h-[2.75rem] px-3">
            <div class="text-[0.75rem] font-semibold">Selected Workers</div>
            <button class=" text-[0.725rem] font-semibold text-primary">Unselect all</button>
          </div>
          <Separator class="!max-w-[calc(100%-1.5rem)] mx-auto" />
          <div class="flex-1 p-3 max-h-[25rem] overflow-auto custom-scroll">
            <Show
              when={selectedWorkers().length > 0}
              fallback={
                <div class="h-full flex items-center justify-center">
                  <div class="text-sm text-muted-foreground">No selected worker</div>
                </div>
              }
            >
              <div class=" flex flex-wrap gap-1.5">
                <For each={selectedWorkers()}>
                  {(worker) => (
                    <div class="flex items-center gap-2 rounded-[1rem] border bg-background p-1">
                      <img src={worker.profileImgUrl} alt="" class="rounded-full border size-[20px]" />
                      <div class="text-[0.75rem]">{worker.firstname} {worker.lastname}</div>
                      <button class="text-muted-foreground hover:text-gray-700 size-[15px] rounded-full">
                        <IoCloseOutline size={15} />
                      </button>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>
          <div class="px-3 py-3">
            <Button disabled={selectedWorkers().length === 0} class="w-full">Assign</Button>
          </div>
        </div>
      </div >
    </>
  );
};

export default WorkerAssignModal

