"use client"
import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import useCurrentUser from '@/hooks/useCurrentUser';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';
import { useRouter } from 'next/navigation';


const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const router = useRouter()

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '',
    },
  ]

  return (
    <div className="flex flex-cols w-1/4 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <div style={{ padding: '20px 20px' }}>
                <img src='/images/1.png' width="60" height="40"  onClick={()=>{router.push("/")}}/>
            </div>
          
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
            <SidebarTweetButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
