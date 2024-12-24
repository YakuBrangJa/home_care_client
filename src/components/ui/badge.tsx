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
        low: 'border-transparent bg-gray-200/80 text-secondary-foreground hover:bg-secondary/80',
        medium: 'border-transparent bg-warning/50 text-secondary-foreground',
        high: 'border-transparent bg-[#E5666D77] text-secondary-foreground',
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
	const [local, rest] = splitProps(props, ["class", "variant", 'urgency']);

	return (
		<div
			class={cn(
				badgeVariants({
					variant: local.variant,
          urgency: local.urgency
				}),
				local.class,
			)}
			{...rest}
		/>
	);
};
