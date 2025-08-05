import React from 'react'

interface CardServiceProps {
    image: string;
    alt: string;
    title: string;
    description: string;
}

const CardService: React.FC<CardServiceProps> = (props) => {
    const { image, alt, title, description } = props;
    return (
        <div className='max-w-[500px] w-full bg-white shadow-lg rounded-t-4xl flex flex-col items-center relative z-40 max-lg:m-auto'>
            <img src={image} alt={alt} className='w-full h-[220px] lg:h-[340px] rounded-t-4xl object-cover'/>
            <div className='w-full py-8 px-10'>
                <p className='font-cinzel font-bold text-2xl text-[#54290c]'>{title}</p>
                <p className='text-base font-mulish text-black'>{description}</p>
            </div>
        </div>
    )
}

export default CardService