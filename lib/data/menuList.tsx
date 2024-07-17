import { Bell, CalendarDays, CirclePlus, House, Library, QrCode, Settings, User } from "lucide-react";
import { MenuGroup } from "@/lib/types/side-bar-content";

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
                link: "/myClasses",
                label: "My Classes",
                icon: <Library />
            },
            {
                link: "/newClass",
                label: "New Class",
                icon: <CirclePlus />
            },
            {
                link: "/profile",
                label: "Profile",
                icon: <User />
            },
            {
                link: "/events",
                label: "Events",
                icon: <CalendarDays />
            }
            
        ]
    },
    {
        group: "Settings",
        items: [
            {
                link: "/general-settings",
                label: "General Settings",
                icon: <Settings />
            },
            {
                link: "/notifications",
                label: "Notifications",
                icon: <Bell />
            },
            {
                link: "/qr-settings",
                label: "QR Code Settings",
                icon: <QrCode  />
            }
            
        ]
    }
];