'use client';
import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card"
import { Button } from "./ui/button";
import { NotebookPen } from "lucide-react";

interface Classes {
    id: number;
    name: string;
    time: string;
    duration: number; //hrs
    studentQuantity: number;
    currentChapter: string;
}

const classes: Classes[] = [
    {
        id: 1,
        name: "Matemática I",
        time: "16:00",
        duration: 4,
        studentQuantity: 30,
        currentChapter: "Unidad IV"
    },
    {
        id: 2,
        name: "Laboratorio I",
        time: "18:00",
        duration: 3,
        studentQuantity: 26,
        currentChapter: "Unidad V"
    },
    {
        id: 3,
        name: "Arquitectura de computadoras I",
        time: "15:00",
        duration: 2,
        studentQuantity: 18,
        currentChapter: "Unidad VI"
    }
] 

const TodayClasses = () => {
return (
    <div className="p-5">
        <Card>
            <CardHeader>
                <CardTitle className="text-neutral-500 text-xl">Today Classes</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-evenly gap-4 ">
                    {classes.map((item: Classes, key: number) => (
                        <Card key={key} className="grow">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">{item.name}</CardTitle>
                                    <Button variant={'outline'} size={'icon'}>
                                        <NotebookPen />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardDescription className="pl-4 pb-4">
                                <p>starts: <span className="text-neutral-500 font-semibold">{item.time} pm</span></p>
                                <p> duration: <span className="text-neutral-500 font-semibold">{item.duration} hrs</span></p>
                                <p> students: <span className="text-neutral-500 font-semibold">{item.studentQuantity}</span></p>
                                <p>Current chapter: <span className="text-neutral-500 font-semibold">{item.currentChapter}</span></p>
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>)
};

export default TodayClasses;