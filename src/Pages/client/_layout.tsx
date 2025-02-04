import UserProfileMenu from "@/components/Client/profile-menu"
import {buttonVariants} from "@/components/ui/button"
import {UserContexProvider, useUser} from "@/context/user-context"
import {A, useLocation} from "@solidjs/router"
import {Match, ParentProps, Show, Switch} from "solid-js"

function Layout (props: ParentProps) {
  const location = useLocation()

  return (
    <UserContexProvider>
      <Switch
        fallback={
          <div>
            <header class="h-[70px] sticky top-0 backdrop-blur-xl border-b border-gray-100/40">
              <div class="container h-full flex items-center justify-between">
                <img src='../../../../public/HomeCare-logo-lg.png' width={140} />
                <nav class="flex items-center gap-9 text-[0.95rem]">
                  <span class="text-gray-600 hover:text-primary font-normal hover:underline">
                    <A href="/home/#home-hero">Home</A>
                  </span>
                  {/* <span class="text-gray-600 hover:text-primary font-normal hover:underline">
                    <A href="">About</A>
                  </span> */}
                  <span class="text-gray-600 hover:text-primary font-normal hover:underline">
                    <A href="/home/#home-services">Services</A>
                  </span>
                  <span class="text-gray-600 hover:text-primary font-normal hover:underline">
                    <A href="/home/#home-footer">Contact</A>
                  </span>
                </nav>
                <NavAuthSection />
              </div>
            </header>
            {props.children}
          </div >
        }
      >
        <Match when={location.pathname === '/user/signin' || location.pathname === '/user/sign-up'}>
          {props.children}
        </Match>
      </Switch>
    </UserContexProvider >
  )
}

export default Layout


const NavAuthSection = () => {
  const user = useUser()
  console.log(user?.auth.isLoggedin())
  return (
    <Show when={user?.auth.isLoggedin()}
      fallback={
        <div class="flex gap-3">
          <A href="/user/signin" class={buttonVariants({variant: 'outline'})}>Login</A>
          <A href="/user/signup" class={buttonVariants()}>Signup</A>
        </div>
      }
    >
      <div class="flex items-center gap-6">
        <A href="/user/request-service" class={buttonVariants()}>Request Service</A>
        <UserProfileMenu />
      </div>
    </Show>
  )
}