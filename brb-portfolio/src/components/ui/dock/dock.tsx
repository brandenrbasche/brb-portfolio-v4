import {FloatingDock} from "@/components/ui/dock/floating-dock";

import { AiFillHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import PointingIcon from '@/components/ui/PointingIcon'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const dockItems = [
    {
        title: 'Home',
        icon: <AiFillHome />,
        href: '/',
    },
    {
        title: 'About',
        icon: <PointingIcon />,
        href: '/about'
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/brandenbasche/'
    },
    {
        title: 'GitHub',
        icon: <FaGithub />,
        href: 'https://github.com/brandenrbasche/'
    },
    {
        title: 'Email',
        icon: <MdAlternateEmail />,
        href: 'mailto:brandenbasche@gmail.com'
    },
];


export default function Dock() {
    return (
        <div className='mb-6 fixed bottom-0 left-1/2 transform -translate-x-1/2'>
            <FloatingDock items={dockItems} />
        </div>
    )
}