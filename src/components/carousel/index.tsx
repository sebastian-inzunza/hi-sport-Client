import React, { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

function Carousel({ children: slides }: { children: any }) {
    const [current, setCurrent] = useState<number>(0);

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className='overflow-hidden relative h-[6em]'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides}
            </div>
            <div className='absolute inset-0 flex justify-between items-center'>
                <button onClick={prev} className='p-1 rounded-full shadow hover:bg-purple-800'>
                    <AiOutlineCaretLeft className='h-8 w-8' />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow hover:bg-purple-800'>
                    <AiOutlineCaretRight className='h-8 w-8' />
                </button>
            </div>
        </div>
    );
}

export default Carousel;
