'use client';
import React from 'react'
import UserItem from './UserItem';
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command';
import { Bell, CirclePlus, House, Library, LogOut, QrCode, Settings, User } from 'lucide-react';
import { Button } from './ui/button';

interface MenuItem {
    link: string;
    label: string;
    icon: JSX.Element;
}

interface MenuGroup {
    group: string;
    items: MenuItem[];
}

const SideBar = () => { 
    const menuList: MenuGroup[] = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    label: "Home",
                    icon: <House />
                },
                {
                    link: "/",
                    label: "My Classes",
                    icon: <Library />
                },
                {
                    link: "/",
                    label: "New Class",
                    icon: <CirclePlus />
                },
                {
                    link: "/",
                    label: "Profile",
                    icon: <User />
                }
                
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    label: "General Settings",
                    icon: <Settings />
                },
                {
                    link: "/",
                    label: "Notifications",
                    icon: <Bell />
                },
                {
                    link: "/",
                    label: "QR Code Settings",
                    icon: <QrCode  />
                }
                
            ]
        }
    ];

    return (
        <div className=' fixed w-[300px] p-4 min-h-screen flex flex-col gap-4 border-r'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>In<span className="text-orange-500">Class</span></h1>
            </div>
            <div className='grow'>
                <Command style={{overflow: 'visible'}}>
                    <CommandList style={{overflow: 'visible'}}>
                        {menuList.map((menu: MenuGroup, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: MenuItem, optionKey: number) => 
                                <CommandItem key={optionKey} className='flex gap-2 cursor-pointer'>
                                    {option.icon}
                                    {option.label}
                                </CommandItem>)}
                            </CommandGroup>
                        ))}
                    </CommandList >
                </Command>
            </div>
            <Button variant={'ghost'} className='flex items-center justify-start gap-1 pl-0 w-full '>
                <LogOut className="ml-2" />
                Log Out
            </Button>
            <div>
                <UserItem />
            </div>
        </div>
    )
};

export default SideBar;

