'use client'

import Link from 'next/link'
import { ElementPlus, Message, MessageRemove, NotificationBing, Star1,ProfileCircle } from 'iconsax-react'
import { usePathname } from 'next/navigation'




const sidebar = [
  {
    icon: <ProfileCircle size={24} variant="Bold" />,
    text: 'Profile',
    url: '/dashboard/settings/profile',
    style: `border-2 border-white500 rounded-2xl`
  },
  {
    icon: <NotificationBing size={24} variant="Bold" />,
    text: 'Notifications',
    url: '/dashboard/settings/notifications',
    style: ''
  },
]

const settingsLayout = ({ children }) => {
  const pathname = usePathname()

  return (
    <section
      className="border-[3px] border-purple500 pt-7 rounded-[30px] h-screen fixed"
      style={{ width: 'calc(100% - 165px)' }}
    >
      <div className="flex pl-14 pr-9 pb-5 justify-between items-baseline border-b-[3px] border-b-purple500">
        <h3 className="font-medium text-4xl">Settings</h3>
        <button className='bg-purple500 p-2 w-[100px] rounded-md text-black hover:bg-black hover:text-purple500 border-2 border-purple500'>
          Save
        </button>
      </div>
      <div className="flex">
        <aside className="w-[250px] border-r-2 h-screen border-r-purple500">
          {sidebar.map(({ icon, text, url ,style}, i) => {
            return (
              <Link
                key={i}
                href={url}
                className={`flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300 ${
                  pathname === url ? 'text-purple500' : ''
                }`}
              >
                {icon}
                <h4 className="font-medium capitalize">{text}</h4>
              </Link>
            )
          })}
        </aside>
        {/* Outlet  */}
        <div
          className="py-9 px-8 overflow-y-scroll scrollbar-thin"
          style={{
            width: 'calc(100% - 240px)',
            height: 'calc(100vh - 170px)',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default settingsLayout
