import {ServiceLabel} from "@/types/app.type"
import {JSXElement} from "solid-js"
import {IoHammerOutline, TbBath, TbLogicAnd, TbRazor, TbShovel} from "@/components/icons/Tabler.icons"


export const ServiceIcons: Record<ServiceLabel, () => JSXElement> = {
  gardening: () => <TbShovel size={15} />,
  carpentry: () => <IoHammerOutline size={14} />,
  plumbing: () => <TbBath size={13} />,
  electrical: () => <TbLogicAnd size={14} />,
  cleaning: () => <TbRazor size={14} />
}