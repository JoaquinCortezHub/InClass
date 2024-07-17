'use client';

import { BellIcon, Library, NotebookPen, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react";
import AttCard from "../dashboard/AttCard";

interface Notification {
    id: number;
    text: string;
    date: string;
    read: boolean
}

const Header = () => {
    const [notification, setNotification] = useState<Notification[]>([
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
    <div className='p-4 flex items-center justify-end border-b-2 min-h-12 bg-white'>
        <div className="flex items-center justify-center gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={'default'} className="bg-orange-500">
                        Take Attendance
                        <NotebookPen className="ml-2" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Attendance</DialogTitle>
                        <DialogDescription>
                            Choose from where to take attendance.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-stretch justify-center gap-5">
                        <AttCard title="Create New Class" description="Create a class to take attendance." link="/newClass" icon={<Plus />} />
                        <AttCard title="Existing Class" description="Choose a class from your library." link="/myClasses" icon={<Library />} />
                    </div>
                </DialogContent>
            </Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button  className='relative' variant={'outline'} size={'icon'}>
                    <div className={` absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notification.find((item: any) => item.read === true) ? 'bg-orange-500 ' : 'bg-neutral-200'}`}></div>
                        <BellIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {notification.map((item: Notification, key: number) => <DropdownMenuItem key={key}
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