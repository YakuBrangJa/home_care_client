import {TbArrowBarRight} from "@/components/icons/Tabler.icons";
import {buttonVariants} from "@/components/ui/button";
import { cn } from "@/libs/cn";
import type {
	DialogContentProps,
	DialogDescriptionProps,
	DialogTitleProps,
} from "@kobalte/core/dialog";
import { Dialog as DialogPrimitive } from "@kobalte/core/dialog";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps, ParentProps, ValidComponent } from "solid-js";
import { mergeProps, splitProps } from "solid-js";

export const Sheet = DialogPrimitive;
export const SheetTrigger = DialogPrimitive.Trigger;

export const sheetVariants = cva(
	"fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[expanded]:animate-in data-[closed]:animate-out data-[expanded]:duration-200 data-[closed]:duration-200",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[closed]:slide-out-to-top data-[expanded]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[closed]:slide-out-to-bottom data-[expanded]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[closed]:slide-out-to-left data-[expanded]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4 border-l data-[closed]:slide-out-to-right data-[expanded]:slide-in-from-right sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

type sheetContentProps<T extends ValidComponent = "div"> = ParentProps<
	DialogContentProps<T> &
		VariantProps<typeof sheetVariants> & {
			class?: string;
      backdropOpacity?: number
      backdropBlur?: number
		}
>;

export const SheetContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, sheetContentProps<T>>,
) => {
	const merge = mergeProps<sheetContentProps<T>[]>({ side: "right" }, props);
	const [local, { backdropOpacity = 20, backdropBlur = 0 , ...rest}] = splitProps(merge as sheetContentProps, [
		"class",
		"children",
		"side",
	]);

	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay
				class={cn(
					"fixed inset-0 z-50 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
				)}
        style={{
          background: `rgb(120 120 120 / ${backdropOpacity / 100})`,
          // opacity: props.backdropOpacity,
          "backdrop-filter": `blur(${props.backdropBlur}px)`,
        }}
			/>
			<DialogPrimitive.Content
				{...rest}
				class={sheetVariants({ side: local.side, class: local.class })}
			>
				{local.children}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	);
};

type sheetTitleProps<T extends ValidComponent = "h2"> = DialogTitleProps<T> & {
	class?: string;
};

export const SheetTitle = <T extends ValidComponent = "h2">(
	props: PolymorphicProps<T, sheetTitleProps<T>>,
) => {
	const [local, rest] = splitProps(props as sheetTitleProps, ["class"]);

	return (
		<DialogPrimitive.Title
			class={cn("text-lg font-semibold text-foreground", local.class)}
			{...rest}
		/>
	);
};

type sheetDescriptionProps<T extends ValidComponent = "p"> =
	DialogDescriptionProps<T> & {
		class?: string;
	};

export const SheetDescription = <T extends ValidComponent = "p">(
	props: PolymorphicProps<T, sheetDescriptionProps<T>>,
) => {
	const [local, rest] = splitProps(props as sheetDescriptionProps, ["class"]);

	return (
		<DialogPrimitive.Description
			class={cn("text-sm text-muted-foreground", local.class)}
			{...rest}
		/>
	);
};

export const SheetHeader = (props: ComponentProps<"div">) => {
	const [local, rest] = splitProps(props, ["class"]);

	return (
		<div
			class={cn(
				"",
				local.class,
			)}
			{...rest}
		/>
	);
};

export const SheetFooter = (props: ComponentProps<"div">) => {
	const [local, rest] = splitProps(props, ["class"]);

	return (
		<div
			class={cn(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
				local.class,
			)}
			{...rest}
		/>
	);
};
