import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import ExperienceList from "@/components/ui/experience list/ExperienceList";

export default function Homepage() {
    return (
        <>
            {/*<div className='w-screen absolute -top-1'>*/}
            {/*    <TextHoverEffect text={'BRB.CODES'} fontSizeClass={'text-[55px]'}/>*/}
            {/*    /!*<TextHoverEffect text={'BRANDEN BASCHE'}/>*!/*/}
            {/*</div>*/}
            <div className='flex items-center justify-center w-screen h-screen box-border'>
                <ExperienceList />
            </div>
        </>
    )
}