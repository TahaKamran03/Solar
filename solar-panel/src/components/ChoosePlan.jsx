import React, { useState } from "react";
import cardOneImage from "../assets/choose-plan-one.svg";
import cardTwoImage from "../assets/choose-plan-two.svg";
import arrow from "../assets/choose-plan-arrow.svg";
import devices from "../assets/choose-plan-devices.svg";
import famillies from "../assets/choose-plan-famillies.svg";
import dropDown from "../assets/choose-plan-dropdown.svg";
import dot from "../assets/choose-plan-dot.svg";

export const ChoosePlan = () => {
    const [istoggled, setisToggled] = useState(false);
    const [istoggledTwo, setisToggledTwo] = useState(false);

    const toggle = () => {
        setisToggled(prevState => !prevState);
    }

    const toggleTwo = () => {
        setisToggledTwo(prevState => !prevState);
    }
    

  return (
    <section className="pt-20 pb-20">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold leading-[84%] mb-7 text-center">
            Scegli il tuo SIRE
          </h1>
          <div className="w-32 mx-auto h-1 bg-green-500"></div>
        </div>
        <div className="cards-section flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">

        <div className="w-[100%] lg:w-[48.6%] shadow-custom-shadow h-full">
            <img className="w-full" src={cardOneImage} alt="#" />
            <div className="p-6">
              <h3 className="text-2xl leading-[88%] text-green-500 font-semibold mb-6">S.I.R.E Direct</h3>
              <ul className="space-y-5 mb-5">
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">Sistema Plugin</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src={arrow} alt="#" className="pt-1" />
                  <p className="text-base leading-[130%] text-[#666666]">
                    Struttura meccanizzata in poliuera e sensoristica <br /> intelligente
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">Pannelli alta efficienza da 1KW</p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">Inverter e conne ssione aII'impianto domestico</p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">App di controllo e gesti one</p>
                </li>
              </ul>
              <div>
                <h4 className="text-base leading-[84%] font-medium text-[#363636] mb-5">CONSIGLIATO PER:</h4>
                <div className="flex space-x-12 mb-[18px]">
                  <div>
                    <img className="mb-3" src={devices} alt="#" />
                    <p>Devices</p>
                  </div>
                  <div>
                    <img className="mb-3" src={famillies} alt="#" />
                    <p>Families</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-base font-medium leading-[174.5%] text-[#363636]">Scopri le caratteristiche tecniche</p>
                    <button className="flex-shrink-0" onClick={toggle}>
                      <img className={`p-2 ${istoggled ? 'rotate-180 transition-transform' : 'rotate0 transition-transform'}`} src={dropDown} alt="#" />
                    </button>
                  </div>
                  <ul className={`text-base leading-[135%] text-[#666666] space-y-[18px]  ${istoggled ? 'block' : 'hidden' }`}>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Te mpo di ricarica medio in estate</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>TBD Tempo di scarica a 16A.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>TBD Autonomia dalla rete elettrica.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>TBD Autonomia in casa di blackout.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Te mpo di ricarica medio in estate.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className={`w-[100%] lg:w-[48.6%] shadow-custom-shadow h-full`}>
            <img className="w-full" src={cardTwoImage} alt="#" />
            <div className="p-6">
              <h3 className="text-2xl leading-[88%] text-green-500 font-semibold mb-6">S.I.R.E Full</h3>
              <ul className="space-y-5 mb-5 lg:mb-[78px]">
                <li className="flex items-start space-x-3">
                  <img src={arrow} alt="#" className="pt-1" />
                  <p className="text-base leading-[150%] text-[#666666]">
                    Struttura meccanizzata in poliuera e sensoristica
                    intelligente
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">Pannelli alta efficienza da 1KW</p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">Inverter e conne ssione aII'impianto domestico</p>
                </li>
                <li className="flex items-center space-x-3">
                  <img src={arrow} alt="#" />
                  <p className="text-base leading-[130%] text-[#666666]">App di controllo e gesti one</p>
                </li>
              </ul>
              <div>
                <h4 className="text-base leading-[84%] font-medium text-[#363636] mb-5">CONSIGLIATO PER:</h4>
                <div className="flex space-x-12 mb-[18px]">
                  <div>
                    <img className="mb-3" src={devices} alt="#" />
                    <p>Devices</p>
                  </div>
                  <div>
                    <img className="mb-3" src={famillies} alt="#" />
                    <p>Families</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-base font-medium leading-[174.5%] text-[#363636]">Title here if they have othervise remove this</p>
                    <button className="flex-shrink-0" onClick={toggleTwo}>
                      <img className={`p-2 ${istoggledTwo ? 'rotate-180 transition-transform' : 'rotate0 transition-transform'}`} src={dropDown} alt="#" />
                    </button>
                  </div>
                  <ul className={`text-base leading-[135%] text-[#666666] space-y-[18px]  ${istoggledTwo ? 'block' : 'hidden' }`}>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Siste ma 2 kW con accumuIo.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Tempo di ricarica medio in estate is 5 ore e 30 minuti</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Te mpo di scarica a 16A is 8 ore.</p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={dot} alt="#" />
                      <p>Autonomia dalla rete eIettrica 62Po.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        



          


        </div>
      </div>
    </section>
  );
};
