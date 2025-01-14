import {IconProps} from "solid-icons";
import {splitProps} from "solid-js";

export function FiSave (props: IconProps) {
  const [local, others] = splitProps(props, ['size']);

  return (
    <svg {...others} font-size={local.size} fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><path d="M17 21 17 13 7 13 7 21"></path><path d="M7 3 7 8 15 8"></path></svg>
  );
}
