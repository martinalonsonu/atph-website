"use client";

import useScroller from '@/hooks/useScroller'
import React from 'react'
import { HERO_INFORMATION } from '@/utils/models'

const HeroSection = () => {
    const { currentItem } = useScroller(HERO_INFORMATION);
    return (
        <div className='w-full h-auto lg:h-[825px] flex flex-col lg:flex-row bg-[#f5faff]'>
            <div className='lg:w-[40%] h-full'>
                <img
                    src={currentItem.image}                    
                    className='hidden lg:block w-full h-[285px] lg:h-full object-cover'
                    alt={currentItem.alt}
                />
                <img
                    src={currentItem.imageMobile}                    
                    className='block lg:hidden w-full h-[285px] lg:h-full object-cover'
                    alt={currentItem.alt}
                />      
            </div>
            <div className='flex flex-col lg:w-[60%] flex-1'>
                <div className='w-full h-[320px] sm:h-[655px] flex flex-col px-4 py-3 sm:py-14 sm:pl-24 justify-center gap-8 relative overflow-hidden'>
                    <h1 className='text-3xl sm:text-[78px] sm:leading-[60px] z-10 text-[#cca21c] font-cinzel'>A TUS PIES <br /><span className='text-4xl sm:text-[86px] text-[#54290c] font-bold'>HUMILDE</span></h1>
                    <p className='text-base sm:text-2xl max-w-[280px] sm:max-w-[520px] font-mulish'>Nacimos con una misión: servir a Dios y a nuestra comunidad. A través de los medios digitales, buscamos inspirar y conectar a las personas con su fe.</p>
                    <img src="/assets/atph-logo2.png" alt="A Tus Pies Humilde"  className='w-[300px] sm:w-[450px] right-[-40%] sm:right-[-15%] absolute lg:w-[650px] lg:right-[-30%] opacity-20'/>
                </div>
                <div className='flex max-lg:flex-col flex-row h-[170px] font-work'>
                    <div className='w-full lg:w-1/3 bg-[#54290c] text-[#dbd2b5] font-work flex flex-col justify-center py-8 px-3 sm:p-3 font-black'>COBERTURAS ESPECIALES: <span className='font-medium text-white'>Difundiendo la riqueza de tu devoción por medios digitales</span></div>
                    <div className='w-full lg:w-1/3 bg-[#dbd2b5] text-[#54290c] font-work flex flex-col justify-center py-8 px-3 sm:p-3 font-black'>TRANSMISIONES EN VIVO: <span className='font-medium'>Tus procesiones, misas, más cerca de ti</span></div>
                    <div className='w-full lg:w-1/3 bg-[#54290c] text-[#dbd2b5] font-work flex flex-col justify-center py-8 px-3 sm:p-3 font-black'>EVENTOS RELIGIOSOS: <span className='font-medium text-white'>Alfombras, Kabuki, Decoración, Sonido y Luces</span></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection