"use client"

import React from 'react'
import AccordionUi from '@/components/ui/accordion/accordion/accordion';
import AccordionHeaderUi from '@/components/ui/accordion/accordionHeader/accordionHeader';
import AccordionBodyUi from '@/components/ui/accordion/accordionBody/accordionBody';

const page: React.FC = () => {
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    return(
        <>
            <AccordionUi open={open == 1}>
                <AccordionHeaderUi onClick={() => handleOpen(1)}>
                    <div>What is Material Tailwind?</div>
                </AccordionHeaderUi>
                <AccordionBodyUi>
                    <div>
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
                    </div>
                </AccordionBodyUi>
            </AccordionUi>
        </>
    )
}

export default page;
