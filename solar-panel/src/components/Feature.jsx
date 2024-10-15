import React from 'react'
import versatileImg from '../assets/versatile.svg'
import indipendenteImg from '../assets/indipendente.svg'
import automatizzatoImg from '../assets/automatizzato.svg'
import connessoImg from '../assets/connesso.svg'
import efficienteImg from '../assets/efficiente.svg'
import risententeImg from '../assets/risentente.svg'

export const Feature = () => {
  return (
    <section className="bg-feature-bg bg-cover bg-center mt-20">
          <div className="container pt-20 pb-20">
            <div className="mb-20">
              <h1 className="text-4xl font-semibold leading-[120%] mb-7 text-center">Connesso, Intelligente, Resistente</h1>
              <div className="w-32 mx-auto h-1 bg-green-500"></div>
            </div>
            

            <div className="grid-cols-1 gap-y-4 grid lg:grid-cols-2 justify-between justify-items-center gap-x-12"> 
              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={versatileImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Versatile</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                </div>
              </div>

              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={indipendenteImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Indipendente e Green</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.</p>
                </div>
              </div>

              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={automatizzatoImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Automatizzato</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche.		</p>
                </div>
              </div>


              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={connessoImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Connesso</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.</p>
                </div>
              </div>


              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={efficienteImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Efficiente</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.</p>
                </div>
              </div>

              <div className="max-w-lg mb-8 flex space-x-3 items-start">
                <img className="w-[61px]" src={risententeImg} alt="" />
                <div>
                  <h3 className="text-xl leading-[84%] font-semibold text-[#1E1E1E] mb-3">Resistente</h3>
                  <p className="text-[18px] leading-[128%] text-[#363636]">Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
  )
}
