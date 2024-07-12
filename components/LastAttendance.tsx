'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const LastAttendance = () => {
return (
    <div className="px-5">
        <Card>
            <CardHeader>
                <CardTitle className="text-neutral-500 text-xl">Last Attendance</CardTitle>
            </CardHeader>
        </Card>
    </div>
)
};

export default LastAttendance;