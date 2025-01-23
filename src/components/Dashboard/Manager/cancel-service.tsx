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

const CancelServiceDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        as={(props: AlertDialogTriggerProps) => (
          <Button variant="destructive" {...props} class="gap-2 flex-1">
            <TbBan size={17} />
            Cancel Service
          </Button>
        )}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel Service?</AlertDialogTitle>
          <AlertDialogDescription>
            This will cancel the service process and will notify the user. You may provide reason for cancellation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelServiceDialog;
