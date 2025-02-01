import type {AlertDialogTriggerProps} from "@kobalte/core/alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {TbBan} from "@/components/icons/Tabler.icons";
import {ComponentProps, JSX, splitProps} from "solid-js";
import {cn} from "@/libs/cn";


interface Props extends ComponentProps<typeof Button> {
  title: string
  description?: string
  onCancel?: JSX.EventHandler<HTMLButtonElement, MouseEvent>
  onConfirm?: JSX.EventHandler<HTMLButtonElement, MouseEvent>
}

const CancelAlertDialog = (props: Props) => {
  const [local, rest] = splitProps(props, ['class'])

  return (
    <AlertDialog>
      <AlertDialogTrigger
        as={(props: AlertDialogTriggerProps) => (
          <Button variant="destructive" {...props} class={cn("gap-2 flex-1", local.class)}>
            <TbBan size={17} />
            Cancel Service
          </Button>
        )}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose onClick={props.onCancel}>Cancel</AlertDialogClose>
          <AlertDialogAction onClick={props.onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelAlertDialog;
