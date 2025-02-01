import {cn} from "@/libs/cn";
import {UserAuthForm} from "./user-auth-form";
import {ParentProps} from "solid-js";
import {buttonVariants} from "@/components/ui/button";

interface Props extends ParentProps {
  title: string
  description?: string
}

const AuthLayout = (props: Props) => {
  return (
    <div class="container relative h-[100vh] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <a
        href="/examples/authentication"
        class={cn(
          buttonVariants({variant: "ghost"}),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </a>
      <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div class="absolute inset-0 bg-primary" />
        <div class="relative z-20 flex items-center text-2xl font-bold">
          HOME CARE
        </div>
        <div class="relative z-20 mt-auto">
          <blockquote class="space-y-2">
            <p class="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than
              ever before.&rdquo;
            </p>
            <footer class="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div class="p-8">
        <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div class="flex flex-col space-y-2 text-center">
            <h1 class="text-2xl font-semibold tracking-tight">
              {props.title}
            </h1>
            <p class="text-sm text-muted-foreground">
              {props.description}
            </p>
          </div>
          {props.children}
          {/* <p class="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="#"
              class="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
