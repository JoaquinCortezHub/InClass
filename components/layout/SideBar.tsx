'use client';
import React from 'react'
import { useState } from 'react';
import { MenuItem, MenuGroup} from '@/lib/types/side-bar-content';
import { menuList } from '@/lib/data/menuList';
import UserItem from './UserItem';
import { Calendar } from "../ui/calendar";
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideBar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (route: string) => {
        router.push(route);
    };
    
    return (
        <div className=' fixed w-[300px] p-4 min-h-screen flex flex-col gap-4 border-r bg-white'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>In<span className="text-orange-500">Class</span></h1>
            </div>
            <div className='grow'>
                <Command style={{overflow: 'visible'}}>
                    <CommandList style={{overflow: 'visible'}}>
                        {menuList.map((menu: MenuGroup, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: MenuItem, optionKey: number) => 
                                <CommandItem 
                                    key={optionKey}
                                    className={`flex gap-2 cursor-pointer ${pathname === option.link ? 'bg-orange-500 text-white' : ''}`} 
                                    onClick={() => handleNavigation(option.link)}
                                >
                                    <Link href={option.link} className='flex gap-2 items-center'>
                                        {option.icon}
                                        {option.label}
                                    </Link>
                                </CommandItem>)}
                            </CommandGroup>
                        ))}
                    </CommandList >
                </Command>
            </div>
            <div className='mb-9 flex items-start justify-start w-full'>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md "
                />
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

