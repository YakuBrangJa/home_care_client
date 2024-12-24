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
			<nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
				<For each={props.links}>
					{(item) => (
						<Show
							when={props.isCollapsed}
							fallback={
								<A
									href={item.href}
									activeClass={cn(
										buttonVariants({
											variant: 'default',
											size: "sm",
                      class: "text-sm dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
										}),
										"justify-start",
									)}
									inactiveClass={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											class: "text-sm",
										}),
										"justify-start",
									)}
								>
									<div class="mr-2">{item.icon}</div>
									{item.title}
									{item.label && (
										<span
											class={cn(
												"ml-auto text-background dark:text-white",
											)}
										>
											{item.label}
										</span>
									)}
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
									{item.title}
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
