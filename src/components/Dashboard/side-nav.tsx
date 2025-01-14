import { cn } from "@/libs/cn";
import { buttonVariants } from "@components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@components/ui/tooltip";
import {A} from "@solidjs/router";
import { For, type JSX, Show } from "solid-js";

type Props = {
	isCollapsed: boolean;
	links: {
    href: string;
		title: string;
		label?: string;
		icon: JSX.Element;
	}[];
};

export const SideNav = (props: Props) => {
	return (
		<div
			data-collapsed={props.isCollapsed}
			class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
		>
      <nav class="grid gap-1 px-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
				<For each={props.links}>
					{(item) => (
						<Show
							when={props.isCollapsed}
							fallback={
								<A
									href={item.href}
                  class="rounded-md px-4 h-[2.4rem] inline-flex items-center text-sm font-medium"
                  activeClass="bg-primary text-white"
                  inactiveClass=" hover:bg-primary/10 text-secondary-foreground"
								>
									<div class="mr-2">{item.icon}</div>
                  {item.title}
								</A>
							}
						>
							<Tooltip openDelay={0} closeDelay={0} placement="right">
								<TooltipTrigger
									as="a"
									href="#"
									class={cn(
										buttonVariants({ variant: "ghost", size: "icon" }),
										"h-9 w-9",
											"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
									)}
								>
									{item.icon}
                  <span class="sr-only">{item.title}</span>
								</TooltipTrigger>
								<TooltipContent class="flex items-center gap-4">
                  {item.label}
									<Show when={item.label}>
										<span class="ml-auto text-muted-foreground">
											{item.label}
										</span>
									</Show>
								</TooltipContent>
							</Tooltip>
						</Show>
					)}
				</For>
			</nav>
		</div>
	);
};
