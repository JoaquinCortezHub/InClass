import { Event } from "../types/event";

export const eventList: Event[] = [
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