import AuthLayout from "@/components/Auth/auth-layout"
import {Button, buttonVariants} from "@/components/ui/button"
import {FieldLabel, TextField, TextFieldRoot} from "@/components/ui/textfield"
import {useUser} from "@/context/user-context"
import {cn} from "@/libs/cn"
import {A, useNavigate} from "@solidjs/router"
import {createEffect, createSignal} from "solid-js"

function WorkerLogin () {
  const [isLoading, setIsLoading] = createSignal(false)
  const navigate = useNavigate()
  const user = useUser()


  return (
    <AuthLayout
      title='Worker Dashboard Login In '
      description=''
    >
      <div class="grid gap-6">
        <form>
          <div class="grid gap-2">
            <div class="grid gap-1 mb-5">
              <TextFieldRoot>
                <FieldLabel class="sr-only">Email</FieldLabel>
                <TextField
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autocomplete="false"
                  autocorrect="off"
                  disabled={isLoading()}
                />
              </TextFieldRoot>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Email</FieldLabel>
                <TextField
                  id="email"
                  placeholder="password"
                  type="password"
                  autoCapitalize="none"
                  autocomplete="new-password"
                  autocorrect="off"
                  disabled={isLoading()}
                />
              </TextFieldRoot>
            </div>
            <Button disabled={isLoading()}
              onClick={() => {
                user?.setIsLoggedin(true)
                navigate('/worker/tasks')
              }}
            >
              {isLoading() && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25l2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
                  />
                  <title>Loading</title>
                </svg>
              )}
              Login
            </Button>
          </div>
        </form>
      </div >
    </AuthLayout>
  )
}

export default WorkerLogin