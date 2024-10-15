import React, {useState} from 'react'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'


export const Faqs = () => {
    const [toggledO, setToggledO] = useState(false);
    const [toggledT, setToggledT] = useState(false);
    const [toggledTh, setToggledTh] = useState(false);
    const [toggledF, setToggledF] = useState(false);
    const [toggledFi, setToggledFi] = useState(false);
    const [toggledS, setToggledS] = useState(false);
    const [toggledSe, setToggledSe] = useState(false);

    const toggleBtnO = () => {
        setToggledO(prev => !prev);
    }

    const toggleBtnT = () => {
        setToggledT(prev => !prev);
    }

    const toggleBtnTh = () => {
        setToggledTh(prev => !prev);
    }

    const toggleBtnF = () => {
        setToggledF(prev => !prev);
    }

    const toggleBtnFi = () => {
        setToggledFi(prev => !prev);
    }

    const toggleBtnS = () => {
        setToggledS(prev => !prev);
    }

    const toggleBtnSe = () => {
        setToggledSe(prev => !prev);
    }


  return (
    <section className='py-20'>
        <div className="container">
            <div className="mb-12">
                <h1 className="text-4xl font-semibold leading-[130%] lg:leading-[84%] mb-7 text-center">
                Frequently Asked Questions
                </h1>
                <div className="w-32 mx-auto h-1 bg-green-500"></div>
            </div>

            <div className='main'>
                <div className='w-full'>
                    
                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnO}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledO ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>Dove si monta S.I.R.E.?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledO ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F] pr-4'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>

                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnT}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledT ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>Chi monta l’impianto S.I.R.E.?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledT ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F]'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>

                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnTh}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledTh ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>Quanto tempo impiega l’installazione?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledTh ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F] pr-4'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>

                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnF}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledF ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>E’ necessario richiedere autorizzazioni al condominio?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledF ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F] pr-4'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>


                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnFi}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledFi ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>E’ necessario predisporre pratiche per il GSE? </p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledFi ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F] pr-4'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>

                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnS}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledS ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>L’impianto è garantito?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledS ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F]'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>

                    <div className='mb-5 shadow-custom-shadow rounded-md'>
                        <div className='flex flex-row items-center'>
                            <button className='flex-shrink-0' onClick={toggleBtnSe}><img className='pt-4 pl-6 pr-6 pb-4' src={toggledSe ? minus : plus} /></button>
                            <p className='pt-4 pb-4 text-base font-medium text-[#363636]'>E’ possibile usufruire di bonus fiscali?</p>
                        </div>
                        <div className={`pb-4 pl-6 ${toggledSe ? 'block transition-transform' : 'hidden transition-transform'}`}>
                            <p className='text-[14px] leading-[24px] text-[#54595F]'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-[70px]'>
                <button className='bg-green-500 py-4 px-5 text-white rounded-md text-base font-medium leading-[87%]'>Collegati al sole</button>
            </div>
            </div>
        </div>
    </section>
  )
}