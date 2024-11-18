import {ListItemType} from "@/app/types";
import ListItem from "@/components/ui/experience list/ListItem";

interface ExperienceListProps {
    items: ListItemType[];
}

const listItems: ListItemType[] = [
    {
        title: 'PM Creates',
        description: 'E-commerce brand honoring Japanese tattoo artists',
        link: 'https://pmcreates.com/',
        startDate: '2024',
        isModal: false
    },
    {
        title: 'Giampiero Tagliaferri',
        description: 'Architecture and design practice based in LA and Milan',
        link: 'https://www.giampierotagliaferri.com/',
        startDate: '2024',
        isModal: false
    },
    {
        title: 'SvelteScope',
        description: 'Developer tool for debugging Svelte state',
        link: 'https://sveltescope.com/',
        startDate: '2024',
        isModal: false
    },
    {
        title: 'Planet Chrome',
        description: 'Astronaut-themed productivity Chrome extension',
        link: '/',
        startDate: '2024',
        isModal: false
    },
    {
        title: 'General Motors',
        description: 'Full-Stack Engineer',
        startDate: '2023-2024',
        isModal: true
    },
    {
        title: 'General Motors',
        description: 'Lead Quality Engineer',
        startDate: '2020-2023',
        isModal: true
    },
    {
        title: 'Virtual Reality Ireland',
        description: 'Boutique VR agency in Dublin',
        link: 'https://www.virtualreality.ie/',
        startDate: '2019',
        isModal: false
    },
];

export default function ExperienceList() {
    return (
        <div className='flex flex-col items-center justify-center gap-y-8 box-border w-full max-w-[800px] pb-[25vh] px-6'>
            {listItems.map((item: ListItemType, index: number) => (
                <ListItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    location={item.location}
                    isModal={item.isModal}
                />
            ))}

        </div>
    )
}