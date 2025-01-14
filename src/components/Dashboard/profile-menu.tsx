import type {DropdownMenuSubTriggerProps} from "@kobalte/core/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {Button} from "@kobalte/core/button";
import {TbSelector} from "@/components/icons/Tabler.icons";

const ProfileMenu = () => {
  return (
    <DropdownMenu placement="bottom-start">
      <DropdownMenuTrigger
        as={(props: DropdownMenuSubTriggerProps) => (
          <Button {...props} class="border bg-white rounded-md px-2 flex items-center h-[3rem] w-full text-sm gap-2">
            <img src="" class="rounded-full size-[35px] border" />
            <div class="flex flex-col items-start flex-1">
              <span class="text-[0.85rem] font-medium">Mr Rajs das</span>
              <span class="text-xs text-muted-foreground">Manager</span>
            </div>
            <TbSelector size={18} class="self-end" />
          </Button>
        )}
      />
      <DropdownMenuContent class="w-60">
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>My Account</DropdownMenuGroupLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <i class="i-lucide:user mr-2" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <i class="i-lucide:log-out mr-2" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
