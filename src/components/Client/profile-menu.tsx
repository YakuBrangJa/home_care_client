import type {DropdownMenuSubTriggerProps} from "@kobalte/core/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {A, useNavigate} from "@solidjs/router";
import {useUser} from "@/context/user-context";
import Avatar from "@/components/ui/avatar";
import {createMemo} from "solid-js";


const UserProfileMenu = () => {

  const navigate = useNavigate()
  const user = useUser()

  const username = createMemo(() => user?.profile().firstname + ' ' + user?.profile().lastname)

  return (
    <DropdownMenu placement="bottom-end">
      <DropdownMenuTrigger
        as={(props: DropdownMenuSubTriggerProps) => (
          <button {...props}>
            <Avatar name={username()} />
          </button>
        )}
      />
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel class="flex items-center gap-3">
            <Avatar name={username()} size={45} />
            <div>
              <div>{username()}</div>
              <div class="text-xs font-light">{user?.profile().email}</div>
            </div>
          </DropdownMenuGroupLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/user/profile')}>
            <i class="i-lucide:user mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/user/service-history')}>
            <i class="i-lucide:credit-card mr-2" />
            <span>Service history</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {
          user?.setIsLoggedin(false)
          navigate('/user/signin')
        }}>
          <i class="i-lucide:log-out mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileMenu;