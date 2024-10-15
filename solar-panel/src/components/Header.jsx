import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconMessage from "../assets/icon-message.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/close.svg";


export const Header = () => {
  const [toggled, setToggled] = useState(false)

  const hamburgerToggler = () => {
    setToggled(prev => !prev);
  }

  useEffect(() => {

    if (toggled) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [toggled]);

  return (
    <>
    <header className="mt-4">
        <div className="container relative">
          <div className="flex justify-between  item-center pb-4 border-b border-[#F3EDED]">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <div className="hidden lg:flex space-x-10 items-center">
              <div className="flex items-center space-x-3">
                <img className="inline" src={iconPhone} alt="" />
                <a href="telto:02035194420" className="text-grey">
                  0203 519 4420
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <img className="inline" src={iconMessage} alt="" />
                <a href="mailto:info@solarinnovatio.com" className="text-grey">
                  info@solarinnovatio.com
                </a>
              </div>
              <button className="text-white py-3.5 px-6 bg-green-500 rounded-md">
                Contact Us
              </button>
              
            </div>
            <button onClick={hamburgerToggler} className='block lg:hidden'><img src={`${toggled? close : hamburger}`} /></button>
          </div>
          <nav>
            <ul className={`bg-white w-screen text-center h-[calc(100vh-77px)] absolute left-1/2 -translate-x-1/2 ${toggled?  'flex' : 'hidden' } flex-col justify-center space-y-10 | lg:items-start lg:h-[59px] lg:w-auto lg:flex lg:flex-row lg:space-y-0 lg:relative lg:justify-between lg:pt-6 lg:pb-4`} >
              <li className="text-green-500 text-lg leading-[95.5%]">
                <a href="#">Home</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">Chi Siamo</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">S.I.R.E</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">SIRE Features</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">Why SIRE?</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">SIRE Product</a>
              </li>
              <li className="text-grey text-lg leading-[95.5%]">
                <a href="#">How it Works?</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      </>
  )
}