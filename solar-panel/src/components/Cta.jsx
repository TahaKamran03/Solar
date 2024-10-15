import React from 'react'
import ctaIcon from '../assets/cta-icon.svg'

export const Cta = () => {
  return (
    <section className='bg-cta-bg bg-cover bg-center py-8'>
        <div className="container">
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0'>
                <div className=''>
                    <h3 className='mb-4 text-2xl font-semibold text-white leading-[80%]'>Subscribe for Newsletter</h3>
                    <p className='text-base leading-[112.5%] text-white font-[400]'>Leo dui fermentum tristique urna tellus eget amet aliquam. Id <br /> vitae orci maecenas tortor odio</p>
                </div>
                <div className='relative w-[100%] lg:w-auto'>
                <input type="text" placeholder='Inserisci la tua email' className='w-[100%] lg:w-[427px] h-[50px] py-4 pl-6 pr-16 rounded-3xl outline-none' />
                <img className='absolute right-[6px] top-[6px] ' src={ctaIcon} alt="" />
                </div>
                
            </div>
        </div>
    </section>
  )
}