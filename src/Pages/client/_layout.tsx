import UserProfileMenu from "@/components/Client/profile-menu"
import {buttonVariants} from "@/components/ui/button"
import {A} from "@solidjs/router"
import {ParentProps} from "solid-js"

function Layout (props: ParentProps) {
  return (
    <div>
      <header class="h-[70px] sticky top-0 backdrop-blur border-b border-gray-100">
        <div class="container h-full flex items-center justify-between">
          <img src='../../../../public/HomeCare-logo-lg.png' width={140} />
          <nav class="flex items-center gap-9 text-[0.95rem]">
            <span class="text-gray-600 hover:text-primary font-normal hover:underline">
              <a href="">Home</a>
            </span>
            <span class="text-gray-600 hover:text-primary font-normal hover:underline">
              <a href="">About</a>
            </span>
            <span class="text-gray-600 hover:text-primary font-normal hover:underline">
              <a href="">Services</a>
            </span>
            <span class="text-gray-600 hover:text-primary font-normal hover:underline">
              <a href="">Contact</a>
            </span>
          </nav>
          <div class="flex items-center gap-6">
            <A href="/user/request-service" class={buttonVariants()}>Request Service</A>
            <UserProfileMenu />
          </div>
          {/* <div class="flex gap-3">
            <Button variant='outline'>Login</Button>
            <Button>Signup</Button> 
          </div> */}
        </div>
      </header>
      {props.children}
    </div>
  )
}

export default Layout