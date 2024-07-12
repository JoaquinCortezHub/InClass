import { Bell, CalendarDays, CirclePlus, House, Library, QrCode, Settings, User } from "lucide-react";
import { MenuGroup } from "../types/side-bar-content";

export const menuList: MenuGroup[] = [
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
            },
            {
                link: "/",
                label: "Events",
                icon: <CalendarDays />
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