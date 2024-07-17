import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';

interface AttCardProps {
    title: string,
    description: string,
    link: string,
    icon: React.ReactNode,
};

const AttCard = ({ title, description, link, icon }: AttCardProps) => {
    return (
        <Link href={link}>
            <Card className='hover:bg-orange-500 hover:text-white'>
                <CardHeader className='flex flex-col gap-2 items-center'>
                    {icon}
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-center'>{description}</p>
                </CardContent>
            </Card>
        </Link>
    )
};

export default AttCard;