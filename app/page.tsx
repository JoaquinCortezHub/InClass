import Events from "@/components/Events";
import RecentExports from "@/components/RecentExports";
import TodayClasses from "@/components/TodayClasses";


export default function Home() {
  return (
    <>
      <TodayClasses />
      <div className="flex justify-between h-full items-stretch">
        <Events />
        <RecentExports />
      </div>
    </>
  )
}
