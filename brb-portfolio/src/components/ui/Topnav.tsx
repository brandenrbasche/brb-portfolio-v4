export default function Topnav() {
    return (
        <div className='w-screen font-[GeistMono] fixed flex justify-center'>
            <div className='flex flex-col items-start md:flex-row md:items-center justify-between px-6 py-4 w-full max-w-[800px]'>
                <a className='text-2xl font-bold'
                   href='/'
                >
                    BRB.CODES
                </a>
                <h2 className='text-lg'>Branden Basche</h2>
                <p className='text-lg'>UX Engineer</p>
            </div>
        </div>
    )
}