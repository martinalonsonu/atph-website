import React from 'react'
import CardService from './cardService'

const ServicesSection = () => {
  return (
    <section className='w-full bg-[#fefefe] relative'>
        <div className='w-full max-w-[1200px] flex flex-col lg:flex-row mx-auto justify-center items-center py-6 px-4 lg:px-0 lg:py-20'>
            <div className='w-full lg:w-[50%] relative'>
                <div className='w-full mb-9'>
                    <p className='font-work text-xl font-bold text-[#cca21c] mb-2.5'>¿QUÉ HACEMOS?</p>
                    <h3 className='font-cinzel text-4xl lg:text-6xl font-bold text-[#54290c]'>NUESTROS SERVICIOS</h3>
                </div>
                <CardService image='/assets/services-1.png' alt='Portada' title='Coberturas Especiales' description='Realizamos coberturas y transmisiones en vivo de eventos religiosos y culturales a través de nuestras plataformas digitales. Nos especializamos en la transmisión de misas, procesiones y celebraciones especiales, brindando una experiencia visual de alta calidad.'/>
                {/* <img src="/assets/logo-atph-letras.png" alt="A Tus Pies Humilde"  className='w-[200px] sm:w-[250px] left-[-40%] sm:left-[-15%] bottom-[-245px] absolute lg:w-[450px] lg:left-[-30%] opacity-15'/> */}
            </div>
            <div className='w-full lg:w-[50%] flex flex-col mt-9 lg:mt-0 gap-9 lg:gap-24'>
                <CardService image='/assets/services-2.png' alt='Portada' title='Alfombras' description='Nos especializamos en el diseño y elaboración de alfombras artísticas utilizando aserrín y viruta teñida. Estas creaciones, llenas de color y simbolismo, son ideales para celebraciones religiosas y procesiones. Cada alfombra es realizada con dedicación y detalle, reflejando la riqueza de nuestras tradiciones.'/>
                <CardService image='/assets/services-3.png' alt='Portada' title='Eventos Religiosos' description='El mejor realce para tu homenaje, guardada y más con nuestro servicios: Luces led, lanza confeti, chisperos, exornos florales y más.'/>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection