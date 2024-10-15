import React from 'react'
import personOne from "../assets/person-one.svg";
import personTwo from "../assets/person-two.svg";
import personThree from "../assets/person-three.svg";
import abstractDots from "../assets/abstract-green-dots.svg";

export const AboutUs = () => {
  return (
    <section>
          <div className="container">
            <div className="relative"><img className="absolute left-[-60px] top-5" src={abstractDots} alt="" /></div>
          
            <div className="mt-20 text-center">
              <h2 className="text-4xl leading-[84%] font-semibold text-[#363636] mb-8">
                Chi Siamo
              </h2>
              <div className="w-[119.42px] bg-green-500 h-1 mx-auto rounded-lg mb-6"></div>
              <p className="text-[17px] leading-[155%] max-w-[1110px] mx-auto text-[#363636]">
                Solar Innovatio è una PMI innovativa italiana specializzata
                nella progettazione e realizzazione di sistemi fotovoltaici
                intelligenti. Solar Innovatio unisce alla decennale esperienza
                maturata nel panorama italiano nell'ambito delle soluzioni
                fotovoltaiche un approccio ingegneristico, innovativo, digitale
                alla principale fonte di energia rinnovabile.
              </p>
            </div>

            <div className="flex flex-col justify-between items-stretch  mt-[133px] mb-10 lg:flex-row">
              <div className=" lg:w-[30%] w-max-[350] w-[100%] text-center bg-[#F8F8F8] relative rounded-md pb-5">
                <div>
                  <img
                    className="absolute top-[-92px] left-1/2 -translate-x-1/2"
                    src={personOne}
                    alt="#"
                  />
                </div>
                <p className="pt-24 font-medium text-[20px] leading-[22px]text-[#363636]">
                  Cristian Testoni
                </p>
                <p className="pt-2 px-4 mx-auto text-sm leading-[19.5px] text-[#666666]">
                  Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e
                  progettista in aziende meccaniche. Ho avviato come
                  imprenditore svariate iniziative in ambito Automotive e
                  mobilità elettrica.
                </p>
              </div>

              <div className="lg:w-[30%] w-max-[350] w-[100%]  text-center bg-[#F8F8F8] relative rounded-md pb-5 my-32 lg:my-0">
                <div>
                  <img
                    className="absolute top-[-92px] left-1/2 -translate-x-1/2"
                    src={personTwo}
                    alt="#"
                  />
                </div>
                <p className="pt-24 font-medium text-[20px] leading-[22px]text-[#363636]">
                  Francesco Gavioli
                </p>
                <p className="pt-2 px-4 mx-auto text-sm leading-[19.5px] text-[#666666] ">
                  Nel corso degli anni ho maturato una profonda conoscenza nella
                  progettazione e realizzazione di impianti elettrici e di
                  energia rinnovabile. Dal 2020 sono fondatore di Gavioli
                  Impianti, azienda all’avanguardia nell’installazione di
                  impianti fotovoltaici
                </p>
              </div>

              <div className="lg:w-[30%] w-max-[350] w-[100%] text-center bg-[#F8F8F8] relative rounded-md pb-5">
                <div>
                  <img
                    className="absolute top-[-92px] left-1/2 -translate-x-1/2"
                    src={personThree}
                    alt="#"
                  />
                </div>
                <p className="pt-24 font-medium text-[20px] leading-[22px]text-[#363636]">
                  Massimo Fabi
                </p>
                <p className="pt-2 px-4 mx-auto text-sm leading-[19.5px] text-[#666666]">
                  Laurato in Economia e Commercio mi sono occupato per anni di
                  Business Development sia in multinazionali che PMI italiane in
                  differenti settori
                </p>
              </div>
            </div>

            <div>
              <div className="max-w-[892px] mx-auto flex flex-row justify-between items-start">
                <div>
                  <p className="font-playfair text-7xl text-[#9A9A9A]">“</p>
                </div>

                <div className="max-w-[790px] text-center text-[#363636] text-xl font-medium leading-[30px]">
                  <p>
                    Non sviluppiamo pannelli fotovoltaici. Il pannello è solo
                    una componente di una soluzione ingegneristica più completa
                    che comprende sensoristiche avanzate e l'integrazione con i
                    sistemi domotici di casa.
                  </p>
                </div>
                <div>
                  <p className="font-playfair text-7xl text-[#9A9A9A] ">“</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-48 mx-auto mt-8">
                <div className="h-[1px] w-4 bg-green-500"></div>
                  <p className="text-lg text-green-500 leading-[91%] font-medium">Cristian Testoni</p>
                  <div className="h-[1px] w-4 bg-green-500 "></div>
              </div>
            </div>
          </div>
        </section>
  )
}
