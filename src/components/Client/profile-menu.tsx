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
import {faker} from "@faker-js/faker";
import {A, useNavigate} from "@solidjs/router";

const profile_pic = faker.image.avatar()

const UserProfileMenu = () => {

  const navigate = useNavigate()

  return (
    <DropdownMenu placement="bottom-end">
      <DropdownMenuTrigger
        as={(props: DropdownMenuSubTriggerProps) => (
          <button {...props}>
            <img src={profile_pic} alt="" class="w-10 aspect-square rounded-full border border-gray-200" />
          </button>
        )}
      />
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>My Account</DropdownMenuGroupLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/user/profile')}>
            <i class="i-lucide:user mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/user/service-history')}>
            <i class="i-lucide:credit-card mr-2" />
            <span>Service history</span>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <i class="i-lucide:settings mr-2" />
            <span>Settings</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <i class="i-lucide:log-out mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileMenu;