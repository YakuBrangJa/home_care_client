import {queryClient} from "@/query"
import {QueryClientProvider} from "@tanstack/solid-query"
import {ParentProps} from "solid-js"

function AppProvider (props: ParentProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default AppProvider