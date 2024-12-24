import type {DialogTriggerProps} from "@kobalte/core/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {Button} from "@/components/ui/button";
import {FiPlus} from "@/components/icons/Tabler.icons";


const WorkerAssignModal = () => {
  return (
    <Dialog>
      <DialogTrigger
        as={(props: DialogTriggerProps) => (
          <Button {...props} variant="ghost" size="sm" class="gap-1 text-primary hover:text-primary font-semibold">
            <FiPlus size={15} />
            Assign Worker
          </Button>
        )}
      />
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">

        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WorkerAssignModal

