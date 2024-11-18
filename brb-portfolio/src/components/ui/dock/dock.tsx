import {FloatingDock} from "@/components/ui/dock/floating-dock";

import { AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";


const dockItems = [
    {
        title: 'Home',
        icon: <AiFillHome />,
        href: '/',
        externalLink: false
    },
    {
        title: 'About',
        icon: <VscSmiley />,
        href: '/about',
        externalLink: false
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/brandenbasche/',
        externalLink: true
    },
    {
        title: 'GitHub',
        icon: <FaGithub />,
        href: 'https://github.com/brandenrbasche/',
        externalLink: true
    },
    {
        title: 'Email',
        icon: <MdAlternateEmail />,
        href: 'mailto:brandenbasche@gmail.com',
        externalLink: true
    },
];


export default function Dock() {
    return (
        <div className='w-full flex justify-end mb-6 mr-[24px] fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2'>
            <FloatingDock items={dockItems} />
        </div>
    )
}