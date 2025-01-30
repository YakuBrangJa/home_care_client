import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {TextArea} from "@/components/ui/textarea"
import {TextField, TextFieldLabel, TextFieldRoot} from "@/components/ui/textfield"
import {faker} from "@faker-js/faker"
import {FiSave} from "solid-icons/fi"

const profile_pic = faker.image.avatar()

function ProfilePage () {
  return (
    <div>
      <div class="h-[8rem] relative">
        <img src={profile_pic} class="absolute w-[7rem] aspect-square border border-gray-300 rounded-full left-8 -bottom-10 bg-white" />
      </div>
      <Separator />
      <div class="p-6">
        <div class="flex justify-end">
          <Button class='ml-auto gap-2' disabled>
            <FiSave />
            Save Changes
          </Button>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-5 mt-6">
          <TextFieldRoot>
            <TextFieldLabel>First name</TextFieldLabel>
            <TextField />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldLabel>Last name</TextFieldLabel>
            <TextField />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldLabel>Phone</TextFieldLabel>
            <TextField />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldLabel>Email</TextFieldLabel>
            <TextField />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldLabel>Address</TextFieldLabel>
            <TextArea placeholder="Your full address" rows={4} />
          </TextFieldRoot>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage