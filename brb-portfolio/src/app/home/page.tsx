import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import ExperienceList from "@/components/ui/experience list/ExperienceList";

export default function Homepage() {
    return (
        <>
            <div className='absolute w-screen -top-3'>
                <TextHoverEffect text={'BRB.CODES'}/>
            </div>
            <div className='flex items-center justify-center w-screen h-screen box-border relative'>
                <ExperienceList />
            </div>
        </>
    )
}