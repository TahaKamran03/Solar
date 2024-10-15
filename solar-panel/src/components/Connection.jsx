import React from 'react'
import boxOne from "../assets/connection-o-icon.svg";
import boxTwo from "../assets/connection-t-icon.svg";
import boxThree from "../assets/connection-th-icon.svg";
import boxFour from "../assets/connection-f-icon.svg";


export const Connection = () => {
  return (
    <section className='h-auto xl:h-[567px] bg-connection-bg bg-cover bg-center bg-no-repeat py-14'>
        <div className="container">
            <div className="mb-12">
                <h1 className="text-4xl font-semibold leading-[84%] mb-7 text-center">
                    Connettiti al sole anche tu
                </h1>
                <div className="w-32 mx-auto h-1 bg-green-500"></div>
            </div>

            <div className='space-y-10 xl:space-y-0 flex flex-col xl:flex-row items-center justify-around mb-12'>
                <div className='bg-bg-box-one rotate-90 xl:rotate-0 bg-no-repeat h-[258px] w-[290px] relative'>
                    <div className='w-[227px] -rotate-90 xl:rotate-0 h-[230px] bg-white absolute left-3 top-4 px-4 pt-7 pb-10 flex flex-col items-center rounded-md'>
                        <img className='w-[54px]' src={boxOne} alt="" />
                        <h3 className='text-center my-4 text-base font-medium text-[#363636]'>Richiedi un Preventivo</h3>
                        <p className='text-center text-[14px] text-[#666666] leading-[126%]'>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                        ditilizzn
                        </p>
                    </div>
                    
                </div>

                <div className='bg-bg-box-two rotate-90 xl:rotate-0 bg-no-repeat h-[258px] w-[290px] relative'>

                    <div className='w-[227px] -rotate-90 xl:rotate-0 h-[230px] bg-white absolute left-3 top-4 px-4 pt-7 pb-10 flex flex-col items-center rounded-md'>
                        <img className='w-[54px]' src={boxTwo} alt="" />
                        <h3 className='text-center my-4 text-base font-medium text-[#363636]'>Verifica la compatibilitâ</h3>
                        <p className='text-center text-[14px] text-[#666666] leading-[126%]'>Verifica immediata della necessitâ tecniche di installazione
                        </p>
                    </div>
                    
                </div>

                <div className='bg-bg-box-three rotate-90 xl:rotate-0 bg-no-repeat h-[258px] w-[290px] relative'>

                    <div className='w-[227px] -rotate-90 xl:rotate-0 h-[230px] bg-white absolute left-3 top-4 px-4 pt-7 pb-10 flex flex-col items-center rounded-md'>
                        <img className='w-[54px]' src={boxThree} alt="" />
                        <h3 className='text-center my-4 text-base font-medium text-[#363636]'>Installazione</h3>
                        <p className='text-center text-[14px] text-[#666666] leading-[126%]'>Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore
                        </p>
                    </div>
                </div>

                <div className='bg-bg-box-four rotate-90 xl:rotate-0 bg-no-repeat h-[258px] w-[290px] relative'>
                    <div className='w-[227px] -rotate-90 xl:rotate-0 h-[230px] bg-white absolute left-3 top-4 px-4 pt-7 pb-10 flex flex-col items-center rounded-md'>
                        <img className='w-[54px]' src={boxFour} alt="" />
                        <h3 className='text-center my-4 text-base font-medium text-[#363636]'>Enjoy your Sun Power</h3>
                        <p className='text-center text-[14px] text-[#666666] leading-[126%]'>Connettiti alla APP e  goditi la tua energia  solare
                        </p>
                    </div>

                </div>
            </div>

            <div className='flex justify-center'>
                <button className='bg-green-500 py-4 px-5 text-white rounded-md text-base font-medium leading-[87%]'>Collegati al sole</button>
            </div>
        </div>
    </section>
  )
}
