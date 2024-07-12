export type Event = {
    id: number;
    from: number;
    to? : number;
    month: string;
    name: string;
    type: "Event" | "Holiday" 
};