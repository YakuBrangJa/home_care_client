import AuthLayout from '@/components/Auth/auth-layout'
import {Button, buttonVariants} from '@/components/ui/button'
import {TextArea} from '@/components/ui/textarea'
import {FieldLabel, TextField, TextFieldRoot} from '@/components/ui/textfield'
import {useUser} from '@/context/user-context'
import {cn} from '@/libs/cn'
import {useNavigate, useParams, useLocation, A} from '@solidjs/router'
import {createSignal} from 'solid-js'

function SignUpPage () {
  const [isLoading, setIsLoading] = createSignal(false)
  const navigate = useNavigate()

  const user = useUser()

  return (
    <AuthLayout
      title='Sign Up for Homecare'
      description='Fill in the details below to create your account.'
    >
      <A
        href="/user/signin"
        class={cn(
          buttonVariants({variant: "ghost"}),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </A>
      <div class="grid gap-6">
        <form autocomplete='false'>
          <div class="grid gap-2">
            <div class="grid gap-1">
              <div class='grid gap-2 grid-cols-2'>
                <TextFieldRoot>
                  <FieldLabel class="sr-only">Firstname</FieldLabel>
                  <TextField
                    placeholder="Firstname"
                    autoCapitalize="none"
                    autocomplete="new"
                    autocorrect="off"
                    disabled={isLoading()}
                  />
                </TextFieldRoot>
                <TextFieldRoot>
                  <FieldLabel class="sr-only">LastName</FieldLabel>
                  <TextField
                    placeholder="Lastname"
                    autoCapitalize="none"
                    autocorrect="off"
                    disabled={isLoading()}
                  />
                </TextFieldRoot>
              </div>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Email</FieldLabel>
                <TextField
                  placeholder="Email"
                  type="mail"
                  autoCapitalize="none"
                  autocorrect="off"
                  disabled={isLoading()}
                />
              </TextFieldRoot>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Phone</FieldLabel>
                <TextField
                  placeholder="Phone"
                  autoCapitalize="none"
                  autocorrect="off"
                  disabled={isLoading()}
                />
              </TextFieldRoot>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Address</FieldLabel>
                <TextArea
                  placeholder="Enter your full address"
                  autoCapitalize="none"
                  autocomplete="new-password"
                  disabled={isLoading()}
                  rows={3}
                />
              </TextFieldRoot>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Password</FieldLabel>
                <TextField
                  placeholder="Password"
                  type="password"
                  autoCapitalize="none"
                  autocomplete="new-password"
                  autocorrect="off"
                  disabled={isLoading()}
                />
              </TextFieldRoot>
              <TextFieldRoot>
                <FieldLabel class="sr-only">Password</FieldLabel>
                <TextField
                  placeholder="Confirm your password"
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
                navigate('/user/profile')
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
              Sign Up
            </Button>
          </div>
        </form>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs">
            <span class="bg-background px-2 text-muted-foreground">
              Already have an account?
            </span>
          </div>
        </div>
        <A
          href="/user/signin"
          class={cn(
            buttonVariants({variant: "outline"}),
          )}
        >
          Login
        </A>
        {/* <Button variant="outline" type="button" disabled={isLoading()}> */}
        {/* {isLoading() ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
              />
              <title>Login</title>
            </svg>
          )}{" "} */}
        {/* </Button> */}
      </div>
    </AuthLayout>
  )
}

export default SignUpPage