import {Badge} from "@/components/ui/badge";
import {cn} from "@/libs/cn";
import {createRandomServiceRequests} from "@/libs/faker";
import {ServiceIcons} from "@/utils/consts";
import {A} from "@solidjs/router";
import {format} from "date-fns";
import {For} from "solid-js";
import {Dynamic} from "solid-js/web";

const data = Array.from({length: 10}, createRandomServiceRequests).filter(service => service.status === 'completed' || service.status === 'cancelled');

function UserServiceHistory () {
  return (
    <div class="p-4">
      <h2 class="font-semibold">Request History</h2>
      <div class="flex flex-col gap-2 mt-5">
        <For each={data}>
          {(service) => (
            <div
              class={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              )}
            >
              <div class="flex w-full flex-col gap-1">
                <div class="flex items-center">
                  <div class="flex items-center gap-2">
                    <div class={cn("font-semibold line-clamp-1",
                    )}>{service.subject}</div>
                  </div>
                  <div
                    class={cn(
                      "w-[7rem] text-end ml-auto text-xs",
                    )}
                  >
                    {format(service.requestTime, 'dd MMM, yyyy')}
                  </div>
                </div>
              </div>
              <div class="line-clamp-2 text-xs text-muted-foreground">
                {service.description.substring(0, 300)}
              </div>
              <div class="w-full flex items-center justify-between mt-1">
                <Badge variant='outline' class="gap-1.5 pl-2">
                  <Dynamic component={ServiceIcons[service.serviceType]} />
                  <span class="inline-block first-letter:uppercase">
                    {service.serviceType}
                  </span>
                </Badge>
                {/* <A href="/user/request-history/:id" class="text-sm text-primary hover:underline">View details</A> */}
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default UserServiceHistory