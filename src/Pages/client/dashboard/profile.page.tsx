import Avatar from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {TextArea} from "@/components/ui/textarea"
import {TextField, FieldLabel, TextFieldRoot, FieldErrorMessage} from "@/components/ui/textfield"
import {Profile, useUser} from "@/context/user-context"
import {createForm} from "@tanstack/solid-form"
import {BsPen, BsPencil} from "solid-icons/bs"
import {FiSave} from "solid-icons/fi"
import {createEffect, createMemo, createSignal, Show} from "solid-js"

type ProfileForm = {
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  address: string,
}

function ProfilePage () {
  const [isEditing, setIsEditing] = createSignal(false)
  const user = useUser()

  const form = createForm<ProfileForm>(() => ({
    defaultValues: {
      firstname: user?.profile().firstname || '',
      lastname: user?.profile().lastname || '',
      phone: user?.profile().phone || '',
      email: user?.profile().email || '',
      address: user?.profile().address || '',
    },
    onSubmit: ({value}) => {
      user?.updateProfile(value)
    },
  }))

  const submitHandler = (e: SubmitEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsEditing(false)
    form.handleSubmit()
  }

  return (
    <div>
      <div class="h-[8rem] relative">
        {/* <img src={profile_pic} class="absolute w-[7rem] aspect-square border border-gray-300 rounded-full left-8 -bottom-10 bg-white" /> */}
        <div class="absolute left-8 -bottom-10">
          <Avatar name={user?.profile().firstname + ' ' + user?.profile().lastname} size={110} class="border-2 border-gray-200 rounded-2xl" />
        </div>
      </div>
      <Separator />
      <form class="p-6" onSubmit={submitHandler}> 
        <div class="flex justify-end">
          <Show when={isEditing()}
            fallback={
              <Button type="button" class='ml-auto gap-2' onClick={() => setIsEditing(true)}
              >
                <BsPencil />
                Edit Profile
              </Button>
            }
          >
            <form.Subscribe>
              {(state) => (
                <Button type="submit" class='ml-auto gap-2'
                  disabled={!state().isDirty}
                >
                  <FiSave />
                  Save Changes
                </Button>
              )}
            </form.Subscribe>
          </Show>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-5 mt-6">
          <form.Field
            name="firstname"
            validators={{
              onChange: ({value}) => !value ? "First name must not be empty." : undefined
            }}
          >
            {field => (
              <TextFieldRoot>
                <FieldLabel for={field().name}>First name</FieldLabel>
                <TextField
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  disabled={!isEditing()}
                  onChange={e => {
                    // console.log(field().state.meta)
                    field().handleChange(e.target.value)
                  }}
                  placeholder="Enter your firstname"
                />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </TextFieldRoot>
            )}
          </form.Field>
          <form.Field
            name="lastname"
            validators={{
              onChange: ({value}) => !value ? "Last name must not be empty." : undefined
            }}
          >
            {field => (
              <TextFieldRoot>
                <FieldLabel for={field().name}>Last name</FieldLabel>
                <TextField
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  disabled={!isEditing()}
                  onChange={e => field().handleChange(e.target.value)}
                  placeholder="Enter your lastname"
                />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </TextFieldRoot>
            )}
          </form.Field>
          <form.Field
            name="phone"
            validators={{
              onChange: ({value}) => !value ? "This field must not be empty." : undefined
            }}
          >
            {field => (
              <TextFieldRoot>
                <FieldLabel for={field().name}>First name</FieldLabel>
                <TextField
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  disabled={!isEditing()}
                  onChange={e => field().handleChange(e.target.value)}
                  placeholder="Enter your phone"
                />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </TextFieldRoot>
            )}
          </form.Field>
          <form.Field
            name="email"
            validators={{
              onChange: ({value}) => !value ? "Email must not be empty." : undefined
            }}
          >
            {field => (
              <TextFieldRoot>
                <FieldLabel for={field().name}>Email</FieldLabel>
                <TextField
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  disabled={!isEditing()}
                  onChange={e => field().handleChange(e.target.value)}
                  placeholder="Enter your email"
                />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </TextFieldRoot>
            )}
          </form.Field>
          <form.Field
            name="address"
            validators={{
              onChange: ({value}) => !value ? "Address must not be provided." : undefined
            }}
          >
            {field => (
              <TextFieldRoot>
                <FieldLabel for={field().name}>Address</FieldLabel>
                <TextArea
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  disabled={!isEditing()}
                  onChange={e => field().handleChange(e.target.value)}
                  placeholder="Enter your full address"
                  rows={3}
                />
                <Show when={field().state.meta.errors}>
                  <FieldErrorMessage>{field().state.meta.errors[0]}</FieldErrorMessage>
                </Show>
              </TextFieldRoot>
            )}
          </form.Field>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage