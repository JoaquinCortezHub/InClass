import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader,TableRow } from "@/components/ui/table";
import { eventList } from "@/app/data/eventList";
import { Event } from "@/app/types/event";
import { Badge } from "./ui/badge";

const Events = () => {
    return (
        <div className="pl-5 pb-5 grow ">
            <Card>
                <CardHeader>
                    <CardTitle className='text-neutral-500 text-xl'>Important Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[150px]'>Date</TableHead>
                                <TableHead className='w-[200px]'>Name</TableHead>
                                <TableHead className='text-right'>Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {eventList.map((item: Event) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-semibold">{item.month} {item.from}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={'default'}>{item.type}</Badge>
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

export default Events;