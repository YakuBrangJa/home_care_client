import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {TbBellCancel, TbCircleCheck, TbClipboardText, TbLayoutGrid} from "@/components/icons/Tabler.icons";
import {BoardColumn, Card} from "@/components/Dashboard/service-board";
import {createRandomServiceRequests} from "@/libs/faker";
import {createMemo, For, onMount} from "solid-js";
import {ServiceDetail} from "@/types/app.type";

const serviceRequests = Array.from({length: 25}, createRandomServiceRequests);

type GroupedServices = {
  pending: ServiceDetail[],
  assigned: ServiceDetail[],
  in_progress: ServiceDetail[],
  completed: ServiceDetail[],
  cancelled: ServiceDetail[]
}
const ServiceRequests = () => {
  const groupedServicesMemo = createMemo(() => {
    return serviceRequests.reduce((result: GroupedServices, current: ServiceDetail) => {
      result[current.status as keyof typeof result].push(current); 
      return result;
    }, {
      pending: [],
      assigned: [],
      in_progress: [],
      completed: [],
      cancelled: []
    });
  });

  onMount(() => {
    console.log('groupedServices', groupedServicesMemo())
  })
  const groupedServices = groupedServicesMemo()

  return (
      <div>
        <div class="flex items-center px-4 py-2 h-[52px]">
          <h1 class="text-lg font-semibold">Manage Services</h1>
        </div>
        <Tabs defaultValue="on_going" class="flex flex-col h-[calc(100vh-108px)]">
          <TabsList class="w-fit mx-4 mt-2" variant="underline">
            <TabsIndicator variant="underline" />
            <TabsTrigger
              variant="underline"
              value="on_going"
              class="text-zinc-600 dark:text-zinc-200"
            >
              <TbLayoutGrid size={18} />
              On going
            </TabsTrigger>
            <TabsTrigger
              variant="underline"
              value="completed"
              class="text-zinc-600 dark:text-zinc-200" 
            >
              <TbCircleCheck size={18} />
              Completed
            </TabsTrigger>
            <TabsTrigger
              variant="underline"
              value="cancelled"
              class="text-zinc-600 dark:text-zinc-200" 
            >
              <TbBellCancel size={18} />
              Cancelled
            </TabsTrigger>
            <TabsTrigger
              variant="underline"
              value="all"
              class="text-zinc-600 dark:text-zinc-200" 
            >
              <TbClipboardText size={18} />
              All
            </TabsTrigger>
          </TabsList>
          <Separator class="mx-auto !w-[calc(100%-2rem)]" />
          <TabsContent value="on_going" class="m-0 flex-1 overflow-y-auto pt-4 flex justify-stretch">
            <BoardColumn title="Pending Requests" tagColor="#debd37" count={groupedServices.pending.length}>
              <For each={groupedServices.pending}>
                {(data) => (
                  <Card serviceData={data}/>
                )}
              </For>
            </BoardColumn>
            <Separator orientation="vertical" class="!h-[calc(100%-0.75rem)]" />
            <BoardColumn title="Assigned" tagColor="#6fbee3" count={groupedServices.assigned.length}>
              <For each={groupedServices.assigned}>
                {(data) => (
                  <Card serviceData={data}/>
                )}
              </For>
            </BoardColumn>
            <Separator orientation="vertical" class="!h-[calc(100%-0.75rem)]" />
            <BoardColumn title="Work In Progress" tagColor="#c06fe3" count={groupedServices.in_progress.length}>
              <For each={groupedServices.in_progress}>
                {(data) => (
                  <Card serviceData={data}/>
                )}
              </For>
            </BoardColumn>
          </TabsContent>
          <TabsContent value="cancelled" class="m-0 flex-1 overflow-y-scroll">
            <p>Cancelled</p>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default ServiceRequests;
