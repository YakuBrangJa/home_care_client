import { cn } from "@/libs/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { type ComponentProps, splitProps } from "solid-js";

export const badgeVariants = cva(
	"inline-flex items-center rounded-sm border px-2.5 py-[0.15rem] text-xs font-semibold transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring gap-1.5",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive/50 text-secondary-foreground",
				warning:
					"border-transparent bg-warning/50 text-warning-foreground",
				outline: "text-foreground py-[0.2rem] bg-background",
			},
      urgency: {
        low: 'border-transparent bg-[#5599dc55] text-secondary-foreground pl-1.5 px-2',
        medium: 'border-transparent bg-[#AF7AC555] text-secondary-foreground pl-1.5 px-2',
        high: 'border-transparent bg-[#E74C3C55] text-secondary-foreground pl-1.5 px-2',
      },
      workerStatus: {
        'assigned': 'rounded-md border-[#5599dc99] text-[#5599dc] font-normal px-2',
        'on-site': 'rounded-md border-[#E74C3C99] text-[#E74C3C] font-normal px-2',
        available: 'rounded-md border-primary/60 text-primary font-normal px-2',
      // 'off-shift': 'rounded-md border-[#AF7AC599] text-[#AF7AC5] font-normal px-2',
      }
		},
		defaultVariants: {
			// variant: "default",
		},
	},
);

export const Badge = (
	props: ComponentProps<"div"> & VariantProps<typeof badgeVariants>,
) => {
  const [local, rest] = splitProps(props, ["class", "variant", 'urgency', 'workerStatus']);

	return (
		<div
			class={cn(
				badgeVariants({
					variant: local.variant,
          urgency: local.urgency,
          workerStatus: local.workerStatus,
				}),
				local.class,
			)}
			{...rest}
		/>
	);
};
