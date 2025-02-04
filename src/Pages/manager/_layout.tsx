import ProfileMenu from '@/components/Dashboard/profile-menu'
import {SideNav} from '@/components/Dashboard/side-nav'
import {TbInbox, TbUsers} from '@/components/icons/Tabler.icons'
import {Resizable, ResizableHandle, ResizablePanel} from '@/components/ui/resizable'
import {Separator} from '@/components/ui/separator'
import {cn} from '@/libs/cn'
import {cookieStorage, makePersisted} from '@solid-primitives/storage'
import {useLocation} from '@solidjs/router'
import {createSignal, ParentProps, Show} from 'solid-js'

function Layout (props: ParentProps) {
  const [sizes, setSizes] = makePersisted(createSignal<number[]>([]), {
    name: "manager-nav",
    storage: cookieStorage,
    storageOptions: {
      path: "/",
    },
  });
  const location = useLocation()


  const [isCollapsed, setIsCollapsed] = createSignal(false);

  return (
    <Show
      when={location.pathname !== '/manager/login'}
      fallback={props.children}
    >
    <div>
      <Resizable sizes={sizes()} onSizesChange={setSizes}>
        <ResizablePanel
          initialSize={sizes()[0] ?? 0.2}
          minSize={0.15}
          maxSize={0.2}
          collapsible={false}
          onCollapse={(e) => setIsCollapsed(e === 0)}
          onExpand={() => setIsCollapsed(false)}
          class={cn('',
            isCollapsed() &&
            "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div class='flex items-center h-[52px] px-4 py-2'>
            <img src='../../../../public/HomeCare-logo-lg.png' width={140} />
          </div>
          <Separator />
          {/* <AccountSwitcher isCollapsed={false} /> */}
          <div class='px-4 py-2'>
              <ProfileMenu name={'Mike Wood'} role='Manager' />
          </div>
          <SideNav
            isCollapsed={false}
            links={[
              {
                href: '/manager/manage-services',
                title: "Mange Services",
                label: "128",
                icon: (<TbInbox size={18} />),
              },
              {
                href: '/manager/manage-workers',
                title: "Manage Workers",
                label: "",
                icon: <TbUsers size={18} />,
              },
              // {
              //   href: '/manager/profile',
              //   title: "Manager Profile",
              //   label: "",
              //   icon: <TbUserCircle size={19} />,
              // },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel initialSize={sizes()[1] ?? 0.8} minSize={0.8} class="flex flex-col h-[100vh]">
          <div class="flex items-center justify-center px-4 py-2 h-[52px]">
            <h1 class="text-lg font-bold text-center">Manager Dashboard</h1>
          </div>
          <Separator />
          {props.children}
        </ResizablePanel>
      </Resizable>
    </div>
    </Show>
  )
}

export default Layout