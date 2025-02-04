import AuthLayout from '@/components/Auth/auth-layout'
import {Button, buttonVariants} from '@/components/ui/button'
import {FieldLabel, TextField, TextFieldRoot} from '@/components/ui/textfield'
import {useUser} from '@/context/user-context'
import {cn} from '@/libs/cn'
import {useNavigate, useParams, useLocation, A} from '@solidjs/router'
import {createSignal} from 'solid-js'

function SignInPage () {
  const [isLoading, setIsLoading] = createSignal(false)
  const navigate = useNavigate()

  const user = useUser()

  return (
    <AuthLayout
      title='Login to Homecare'
      description='Enter your email and password below to login.'
    >
      <A
        href="/user/sign-up"
        class={cn(
          buttonVariants({variant: "ghost"}),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Sign Up
      </A>
      <div class="grid gap-6">
        <form>
          <div class="grid gap-2">
            <div class="grid gap-1">
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
              Login
            </Button>
          </div>
        </form>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs">
            <span class="bg-background px-2 text-muted-foreground">
              Does not have an account yet?
            </span>
          </div>
        </div>
        <A
          href="/user/sign-up"
          class={cn(
            buttonVariants({variant: "outline"}),
          )}
        >
          Sign Up here
        </A>
        {/* <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading()}>
          {isLoading() ? (
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
          )}{" "}
          GitHub
        </Button> */}
      </div>
    </AuthLayout>
  )
}

export default SignInPage