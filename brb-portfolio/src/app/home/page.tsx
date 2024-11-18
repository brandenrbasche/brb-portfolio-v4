import ExperienceList from "@/components/ui/experience list/ExperienceList";
import Topnav from "@/components/ui/Topnav";

export default function Homepage() {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen box-border'>
                <ExperienceList />
            </div>
        </>
    )
}