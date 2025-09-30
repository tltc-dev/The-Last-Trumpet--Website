import React, { useEffect, useRef, useState } from 'react'
import Card from '../ui/preview-slider/Card'
import Navigation from '../ui/preview-slider/Navigation'
import { AppEvent } from '@/lib/types';

interface Props {
    events: Array<AppEvent>;
}

const EventPreviewTest = ({ events }: Props) => {

    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % events.length);
        }, 3000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current]);


    return (
        <div className="padding flex flex-col w-full z-20 relative ">
            <div className="relative flex w-full max-w-full mx-auto  h-[400px] md:h-[500px] lg:h-[400px] 2xl:h-[600px]">
                {events.map((evt, idx) => (
                    <Card evt={evt} index={idx} current={current} key={evt.id} length={events.length} />
                ))}
            </div>
            <Navigation setCurrent={setCurrent} length={events.length} />
        </div>
    )
}

export default EventPreviewTest;