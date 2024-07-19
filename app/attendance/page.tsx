'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { studentList } from "@/lib/data/studentList";
import { Clock, QrCode, User } from "lucide-react";
import { Students } from "@/lib/types/students";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const page = () => {
return (
    <div className="p-5">
        <Card className="py-2 mb-5">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-neutral-500 text-xl">Taking attendance:</CardTitle>
                        <h1 className="text-black font-bold text-xl">Laboratorio II</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Badge variant={'default'}>
                            <Clock />
                            <p className="font-medium text-lg ml-2">16:30</p>
                        </Badge>
                        <Badge variant={'default'}>
                            <User />
                            <p className="font-medium text-lg ml-2">4</p>
                        </Badge>
                    </div>
                    <Button variant={'default'} className="bg-orange-500 gap-3">
                        <p>Generate QR</p>
                        <QrCode />
                    </Button>
                </div>
            </CardHeader>
        </Card>
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center font-bold">Name</TableHead>
                        <TableHead className="text-center font-bold">Last name</TableHead>
                        <TableHead className="text-center font-bold">Student ID</TableHead>
                        <TableHead className="text-center font-bold">Sign In Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {studentList.map((item: Students) => (
                        <TableRow key={item.id}>
                            <TableCell className="text-center">{item.name}</TableCell>
                            <TableCell className="text-center">{item.lastName}</TableCell>
                            <TableCell className="text-center">{item.studentId}</TableCell>
                            <TableCell className="text-center">{item.signTime}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    </div>
)
};

export default page;