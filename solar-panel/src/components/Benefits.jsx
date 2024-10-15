import React from 'react'
import benefitOne from '../assets/benefit-icon-one.svg'
import benefitTwo from '../assets/benefit-icon-two.svg'
import benefitThree from '../assets/benefit-icon-three.svg'
import benefitFour from '../assets/benefit-icon-four.svg'

export const Benefits = () => {
  return (
    <section className="bg-[#F9F9F9]">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between pt-8 pb-8 space-y-8 lg:space-y-0">
              
              
              <div className="flex flex-col items-center w-[100%] lg:w-[255px] bg-white p-5 shadow-custom-shadow rounded-md">
                <img className="mb-4" src={benefitOne} alt="" />
                <p className="mb-3 text-[24px] font-semibold text-[#363636]">110%</p>
                <p className=" text-[16px] text-[#666666] leading-[24px]">SUPERBONUS</p>
              </div>

              <div className="flex flex-col items-center w-[100%] lg:w-[255px] bg-white p-5 shadow-custom-shadow rounded-md">
                <img className="mb-4" src={benefitTwo} alt="" />
                <p className="mb-3 text-[24px] font-semibold text-[#363636]">65%</p>
                <p className=" text-[16px] text-[#666666] leading-[24px]">Detrazione DOMOTICA</p>
              </div>


              <div className="flex flex-col items-center w-[100%] lg:w-[255px] bg-white p-5 shadow-custom-shadow rounded-md">
                <img className="mb-7" src={benefitThree} alt="" />
                <p className="text-center text-[16px] text-[#666666] leading-[24px]">Progettazione <br /> personalizzata</p>
              </div>

              <div className="flex flex-col items-center w-[100%] lg:w-[255px] bg-white p-5 shadow-custom-shadow rounded-md">
                <img className=" mb-7" src={benefitFour} alt="" />
                <p className="text-center text-[16px] text-[#666666] leading-[24px]">consulenza fiscale sui <br /> bonus</p>
              </div>


            </div>
          </div>
        </section>
  )
}
