import { RiEmotionHappyLine } from "react-icons/ri";

export default function Topnav() {
    return (
        <div className='w-screen flex justify-center pb-8'>
            <div
                className='cursor-default font-semibold border-b uppercase text-3xl flex flex-col items-start md:items-center md:flex-row justify-between px-6 py-4 w-full max-w-[800px]'>
                <div className='flex gap-x-5 items-center'>
                    <p>Branden Basche</p>
                    <RiEmotionHappyLine className='animate-icon-spin' />
                </div>
                <p>UX Engineer</p>
            </div>
        </div>
    )
}