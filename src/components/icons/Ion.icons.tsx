import {IconProps} from "solid-icons";
import {splitProps} from "solid-js";

export function IoCloseOutline (props: IconProps) {
  const [local, others] = splitProps(props, ['size']);

  return (
    <svg {...others} font-size={local.size} fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368 144 144"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 144 144 368"></path></svg>
  );
}
