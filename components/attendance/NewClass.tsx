'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const NewClass = () => {
    const [activeDays, setActiveDays] = useState<{ [key: string]: boolean }>({});
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const handleClick = (day: string) => {
        setActiveDays((prevActiveDays) => ({
            ...prevActiveDays,
            [day]: !prevActiveDays[day] //? Toggles the boolean value of the state to change the bg color.
        }));
    };

    return (
        <div className="min-w-[600px]">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-neutral-500">
                        Create A New Class
                        <Plus />
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4">
                        <Input
                            id="className"
                            placeholder="Class Name" 
                            className="w-full"
                        />
                        <Textarea
                            id="classDescription"
                            placeholder="Class Description"
                            className="w-full h-32 mb-2"
                        />
                        <div className="flex flex-col gap-2">
                            <Label className="text-neutral-400 mb-1">Class Status</Label>
                            <Card className="p-5 ">
                                <RadioGroup className="flex gap-2 items-center justify-center" defaultValue="option-one">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-one" id="option-one" />
                                        <Label htmlFor="option-one">Promocional</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="option-two" id="option-two" />
                                        <Label htmlFor="option-two">Regular</Label>
                                    </div>
                                </RadioGroup>
                            </Card>
                        </div>
                        <div className="felx flex-col gap-2">
                            <Label className="text-neutral-400 mb-1">Class days</Label>
                            <div className="flex items-center justify-between gap-1">
                                {days.map((day: string) => (
                                    <Button
                                    key={day}
                                    variant={'outline'}
                                    className={`grow ${activeDays[day] ? 'bg-black text-white' : ''}`}
                                    onClick={() => handleClick(day)}
                                    >
                                        {day}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Label className="text-neutral-400 mb-1">Class Time</Label>
                            <div className="flex items-center justify-between gap-1">
                                <Label htmlFor="classTime" className="mr-1">From</Label>
                                <Input
                                    type="time"
                                    id="classTime"
                                    className="grow mr-1 text-center"
                                />
                                <Label htmlFor="classTime" className="mr-1">To</Label>
                                <Input
                                    type="time"
                                    id="classTime"
                                    className="grow text-center"
                                />
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-center gap-5 ">
                            <Link href={'/'}>
                                <Button variant={"outline"}>Save And Back Home</Button> 
                            </Link>
                            <Link href={'/attendance'}>
                                <Button variant={"default"} className="bg-orange-500">Take Attendance</Button>
                            </Link>
                            
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default NewClass;