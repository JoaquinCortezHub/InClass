import Events from "@/components/dashboard/Events";
import LastAttendance from "@/components/dashboard/LastAttendance";
import RecentExports from "@/components/dashboard/RecentExports";
import TodayClasses from "@/components/dashboard/TodayClasses";


export default function Home() {
  return (
    <>
      <TodayClasses />
      <div className="flex justify-between h-full items-stretch">
        <Events />
        <RecentExports />
      </div>
      <LastAttendance />
    </>
  )
}
