"use client";

import useScroller from '@/hooks/useScroller'
import React from 'react'
import { HERO_INFORMATION } from '@/utils/models'

const Scroller = () => {
    const { currentItem } = useScroller(HERO_INFORMATION);
    return (
        <div className='w-full h-auto lg:h-[825px] flex flex-col lg:flex-row bg-[#f5faff]'>
            <div className='lg:w-[37%] h-full'>
                <img
                    src={currentItem.image}                    
                    className='w-full h-[285px] lg:h-full object-cover'
                    alt=""
                />
            </div>
            <div className='flex flex-col lg:w-[63%] flex-1'>
                <div className='w-full h-[655px] flex flex-col py-14 pl-24 justify-center gap-8 relative overflow-hidden'>
                    <h1 className='text-[78px] leading-[60px] z-10 text-[#cca21c] font-cinzel'>A TUS PIES <br /><span className='text-[86px] text-[#54290c] font-bold'>HUMILDE</span></h1>
                    <p className='text-2xl max-w-[520px] font-mulish'>Nacimos con una misión: servir a Dios y a nuestra comunidad. A través de los medios digitales, buscamos inspirar y conectar a las personas con su fe.</p>
                    <img src="/assets/atph-logo2.png" alt="A Tus Pies Humilde"  className='max-lg:hidden absolute w-[650px] right-[-35%] opacity-40'/>
                </div>
                <div className='flex h-[170px] font-work'>
                    <div className='w-1/3 bg-[#54290c] text-[#dbd2b5]'>Hola1</div>
                    <div className='w-1/3 bg-[#dbd2b5] text-[#54290c]'>Hola2</div>
                    <div className='w-1/3 bg-[#54290c] text-[#dbd2b5]'>Hola3</div>
                </div>
            </div>
        </div>
    )
}

export default Scroller