'use client';
import { Classes } from "@/lib/types/classes";
import { classes } from "@/lib/data/classes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button";
import { NotebookPen } from "lucide-react";

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