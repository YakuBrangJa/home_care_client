import {IconProps} from "solid-icons";
import {splitProps} from "solid-js";


export function GrUserWorker (props: IconProps) {
  const [local, others] = splitProps(props, ['size']);

  return (
    <svg {...others} font-size={local.size} fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path fill="none" stroke-width="2" d="M3,6 L21,6 L3,6 Z M10,2 L10,4 M14,2 L14,4 M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,16.5 L12,23 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M8,12 C8,14.209139 9.790861,16 12,16 L12,16 C14.209139,16 16,14.209139 16,12"></path></svg>
  );
}
