'use client';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from './ui/button';
import { DownloadIcon } from 'lucide-react';


interface Exports {
    id: number;
    class: string;
    date: string;
    size: number;
};

const exportList: Exports[] = [
    {
        id: 1,
        class: "Laboratorio I",
        date: "yesterday",
        size: 18
    },
    {
        id: 2,
        class: "Arquitectura I",
        date: "Wednesday",
        size: 36
    },
    {
        id: 3,
        class: "Programacion I",
        date: "03/06",
        size: 12
    },
    {
        id: 4,
        class: "Matemática I",
        date: "Last month",
        size: 44
    }
];

const RecentExports = () => {
    return (
        <div className='px-5 pb-5 grow'>
            <Card>
                <CardHeader>
                    <CardTitle className='text-neutral-500 text-xl'>Recent Exports</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[150px]'>Class</TableHead>
                                <TableHead className='w-[150px]'>Date</TableHead>
                                <TableHead className='w-[150px]'>Size</TableHead>
                                <TableHead className='text-right'>Download</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {exportList.map((item: Exports) => (
                                <TableRow key={item.id}>
                                    <TableCell className='font-semibold'>{item.class}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.size} KB</TableCell>
                                    <TableCell className='text-right'>
                                        <Button variant={'outline'} size={'icon'}>
                                            <DownloadIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
};

export default RecentExports;