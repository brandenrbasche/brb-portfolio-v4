import React from 'react';
import {ListItemType} from "@/app/types";
import {start} from "node:repl";

const ListItem = ({title, description, link, startDate, endDate, location} : ListItemType) => {
    return (
        <a
            href={link}
            className='flex items-center w-full relative overflow-hidden gap-x-3 p-3 -m-3 outline-0 box-border hover:bg-[hsl(0_0%_0%/0.071)] rounded-xl cursor-pointer'
            target='_blank'
        >
            <span className='inline-block text-nowrap font-medium'>{title}</span>
            <span className='hidden font-light text-gray-500 md:visible md:inline-block md:text-nowrap'>{description}</span>
            <hr className='h-[1px] bg-gray-200 w-full border-0 box-border' />
            <div className='text-gray-400 text-nowrap'>
                {!endDate ? `${startDate}` : `${startDate} = ${endDate}`}
                <p>{location}</p>
            </div>
        </a>
    )
}

export default ListItem;