import {
    Card,
    CardContent,
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
import { Badge } from "./ui/badge";

interface Event {
    id: number;
    from: number;
    to? : number;
    month: string;
    name: string;
    type: "Event" | "Holiday" 
}

const eventList: Event[] = [
    {
        id: 1,
        from: 4,
        month: "Apr",
        name: "Primer parcial matemática",
        type: "Event",
    },
    {
        id: 2,
        from: 9,
        month: "Jul",
        name: "Dia de la Independencia",
        type: "Holiday"
    },
    {
        id: 3,
        from: 12,
        to: 25,
        month: "Aug",
        name: "Receso invernal",
        type: "Event"
    },
    {
        id: 4,
        from: 2,
        month: "Sept",
        name: "Feriado Puente",
        type: "Holiday"
    },
    {
        id: 5,
        from: 31,
        month: "Oct",
        name: "Convencion UDA",
        type: "Event"
    }
];

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
                                        <Badge variant={'outline'}>{item.type}</Badge>
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