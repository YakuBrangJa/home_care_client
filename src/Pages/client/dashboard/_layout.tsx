import Avatar from '@/components/ui/avatar'
import {Button, buttonVariants} from '@/components/ui/button'
import {Separator} from '@/components/ui/separator'
import {useUser} from '@/context/user-context'
import {A} from '@solidjs/router'
import {TbEdit, TbHistory, TbSend} from 'solid-icons/tb'
import {ParentProps} from 'solid-js'

function Layout (props: ParentProps) {

  const user = useUser()

  return (
    <div class='flex max-w-[1100px] mx-auto py-5 gap-5'>
      <div class='w-[24rem] h-[35rem] border rounded-lg sticky top-[90px]'>
        <div class='p-4'>
          <div class='flex items-center gap-3'>
            {/* <img src={profile_pic} class="w-[4rem] aspect-square border border-gray-300 rounded-lg" /> */}
            <Avatar
              name={user?.profile().firstname + ' ' + user?.profile().lastname}
              size={64}
              class='rounded-xl'
            />
            <div class='mb-2'>
              <div class='text-[1.05rem] font-semibold'>{user?.profile().firstname + ' ' + user?.profile().lastname}</div>
              <div class='font-light text-sm'>{user?.profile().email}</div>
            </div>
          </div>
          <div class='mt-8'>
            <div class='text-sm font-semibold'>Address</div>
            <div class='text-sm font-light'>{user?.profile().address}</div>
          </div>
          <div class='mt-5'>
            <div class='text-sm font-semibold'>Phone</div>
            <div class='text-sm font-light'>{user?.profile().phone}</div>
          </div>
          <div class='mt-6'>
            <A href='/user/profile' class={buttonVariants({
              variant: 'outline',
              class: 'w-full gap-2'
            })}>
              <TbEdit size={16} />
              Edit Contact
            </A>
          </div>
        </div>
        <Separator />
        <div class='p-4 px-3 flex flex-col gap-1'>
          <A href='/user/request-service'
            activeClass={buttonVariants({variant: 'default', class: 'w-full !justify-start gap-2 px-1'})}
            inactiveClass={buttonVariants({variant: 'ghost', class: 'w-full !justify-start gap-2 px-1'})}
          >
            <TbSend />
            Request Service
          </A>
          <A href='/user/service-history'
            activeClass={buttonVariants({variant: 'default', class: 'w-full !justify-start gap-2 px-1'})}
            inactiveClass={buttonVariants({variant: 'ghost', class: 'w-full !justify-start gap-2 px-1'})}
          >
            <TbHistory />
            Service history
          </A>
        </div>
      </div>
      <div class='w-full border rounded-lg h-fit overflow-hidden'>{props.children}</div>
    </div>
  )
}

export default Layout