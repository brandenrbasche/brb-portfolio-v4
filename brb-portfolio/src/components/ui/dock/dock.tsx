import {FloatingDock} from "@/components/ui/dock/floating-dock";

import { AiFillHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";

const dockItems = [
    {
        title: 'Home',
        icon: <AiFillHome />,
        href: '/',
    },
    {
        title: 'About',
        icon: <GrProjects />,
        href: '/about'
    },
    {
        title: 'Projects',
        icon: <GoProjectRoadmap />,
        href: '/projects'
    }
];


export default function Dock() {
    return (
        <div className='mb-6 fixed bottom-0 left-1/2 transform -translate-x-1/2'>
            <FloatingDock items={dockItems} />
        </div>
    )
}