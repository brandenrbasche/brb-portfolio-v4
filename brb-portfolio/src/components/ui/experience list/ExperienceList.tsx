import {ListItemType} from "@/app/types";

interface ExperienceListProps {
    items: ListItemType[];
}

const listItems: ListItemType[] = [
    {
        title: 'SvelteScope',
        description: 'Insert description here',
        link: 'https://sveltescope.com/',
        startDate: '2024',
    }
];

export default function ExperienceList() {
    return (
        <div>
            <p>experience list</p>
            <ListItem />
        </div>
    )
}