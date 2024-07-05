'use client';

import { BellIcon, LogOut, NotebookPen } from "lucide-react";
import { Button } from "./ui/button";
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { useState } from "react";


const Header = () => {
    const [notification, setNotification] = useState<any>([
        {
            id: 1,
            text: "Hello, i'm a notification",
            date: "04/07",
            read: false
        },
        {
            id: 2,
            text: "Another notification",
            date: "06/07",
            read: false
        },
        {
            id: 3,
            text: "Third notification",
            date: "02/07",
            read: true
        }
    ])
return (
    <div className='p-4 flex items-center justify-end border-b-2 min-h-12'>
        <div className="flex items-center justify-center gap-4">
                    <Button variant={'default'} className="bg-orange-500">
                        Take Attendance
                        <NotebookPen className="ml-2" />
                    </Button>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button  className='relative' variant={'outline'} size={'icon'}>
                    <div className={` absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notification.find((item: any) => item.read === true) ? 'bg-orange-500 ' : 'bg-neutral-200'}`}></div>
                        <BellIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {notification.map((item: any, key: number) => <DropdownMenuItem key={key}
                    className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                        <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-orange-500 ' : 'bg-neutral-200'}`}></div>
                        <div>
                            <p>{item.text}</p>
                            <p className="text-xs  text-neutral-500">{item.date}</p>
                        </div>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>)
};

export default Header;