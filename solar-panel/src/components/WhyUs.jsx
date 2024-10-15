import React from 'react'
import whyUsOne from '../assets/why-us-one.svg'
import whyUsTwo from '../assets/why-us-two.svg'
import whyUsThree from '../assets/why-us-three.svg'

export const WhyUs = () => {
  return (
    <section className="pt-20 pb-12">
          <div className="container">
            <div className="mb-20">
              <h1 className="text-4xl font-semibold leading-[84%] mb-7 text-center">Perchè S.I.R.E.</h1>
              <div className="w-32 mx-auto h-1 bg-green-500"></div>
            </div>

            <div className="flex flex-col justify-between items-stretch lg:flex-row">
              <div className="card-one flex flex-col items-center w-[100%] lg:w-[30%] lg:max-w-350 text-center shadow-custom-shadow pt-10 pb-9 rounded-[10px] px-3">
                <img className="w-[67px]" src={whyUsOne} alt="" />
                <h3 className="text-2xl leading-[50px] text-[#363636] font-semibold mt-6 mb-1">Risparmio Energetico</h3>
                <p className="text-base leading-[26px] text-[#363636]">Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.</p>
              </div>

              <div className="card-one flex flex-col my-9 lg:my-0 items-center w-[100%] lg:w-[30%] lg:max-w-350 text-center shadow-custom-shadow pt-10 pb-9 rounded-[10px] px-3">
                <img className="w-[67px]" src={whyUsTwo} alt="" />
                <h3 className="text-2xl leading-[50px] text-[#363636] font-semibold mt-6 mb-1">Mobilità Elettrica</h3>
                <p className="text-base leading-[26px] text-[#363636]">L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.</p>
              </div>

              <div className="card-one flex flex-col items-center  lg:my-0 w-[100%] lg:w-[30%] lg:max-w-350 text-center shadow-custom-shadow pt-10 pb-9 rounded-[10px] px-3">
                <img className="w-[67px]" src={whyUsThree} alt="" />
                <h3 className="text-2xl leading-[50px] text-[#363636] font-semibold mt-6 mb-1">Comunità Energetica</h3>
                <p className="text-base leading-[26px] text-[#363636]">Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.</p>
              </div>
            </div>
          </div>
        </section>
  )
}
