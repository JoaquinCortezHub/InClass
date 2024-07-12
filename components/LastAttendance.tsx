'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { studentList } from "@/app/data/studentList";
import { Students } from "@/app/types/students";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

const LastAttendance = () => {
return (
    <div className="px-5">
        <Card>
            <CardHeader>
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-neutral-500 text-xl">Last Attendance: </CardTitle>
                        <CardTitle className="text-xl">Laboratorio I</CardTitle>
                    </div>
            </CardHeader>
            <Separator />
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                                <TableHead className='grow'>Name</TableHead>
                                <TableHead className='grow'>Last Name</TableHead>
                                <TableHead className='w-[200px]'>Student ID</TableHead>
                                <TableHead className='text-right pl-2'>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {studentList.map((item: Students ) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.studentId}</TableCell>
                                <TableCell className="text-right">
                                    <Badge variant={'default'} className={item.status === "Present" ? "bg-orange-500" : "bg-slate-400"}>
                                        {item.status}
                                    </Badge>
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

export default LastAttendance;