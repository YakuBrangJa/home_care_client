import {JSXElement, ParentProps} from "solid-js"

export function InfoListItem (props: ParentProps<{
  label: string
  icon: JSXElement
}>) {
  return (
    <div class="flex items-center gap-2">
      <div class="text-[0.825rem] flex items-center gap-2 w-[10rem] text-muted-foreground">
        {props.icon}
        {props.label}
      </div>
      <div class="text-[0.825rem]">
        {props.children}
      </div>
    </div>
  )
}