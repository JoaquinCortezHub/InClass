'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exportList } from '@/lib/data/exportList';
import { Exports } from '@/lib/types/exports';
import { DownloadIcon } from 'lucide-react';
import { Button } from '../ui/button';
import React from 'react';

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
                                        <Button variant={'default'} size={'icon'}>
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