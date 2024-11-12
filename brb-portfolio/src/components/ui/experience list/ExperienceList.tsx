import {ListItemType} from "@/app/types";
import ListItem from "@/components/ui/experience list/ListItem";

interface ExperienceListProps {
    items: ListItemType[];
}

const listItems: ListItemType[] = [
    {
        title: 'SvelteScope',
        description: 'Insert description here',
        link: 'https://sveltescope.com/',
        startDate: '2024',
    },
    {
        title: 'Planet Chrome',
        description: 'Insert description here',
        link: '/',
        startDate: '2024',
    },
];

export default function ExperienceList() {
    return (
        <div className='flex flex-col items-center justify-center gap-7 box-border w-full max-w-[720px]'>
            {listItems.map((item: ListItemType, index: number) => (
                <ListItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    location={item.location}
                />
            ))}
        </div>
    )
}