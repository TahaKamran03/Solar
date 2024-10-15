import React from "react";
import footerLogo from '../assets/footer-logo.svg'
import footerIcon from '../assets/footer-icon.svg'
import fbIcon from '../assets/footer-icon-fb.svg'
import igIcon from '../assets/footer-icon-ig.svg'
import twtIcon from '../assets/footer-icon-twt.svg'
import locationIcon from '../assets/footer-location.svg'
import messageIcon from '../assets/footer-message.svg'
import callIcon from '../assets/footer-call.svg'

export const Footer = () => {
  return (
    <section className="bg-[#4D4D4D] bg-footer-bg bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start py-[70px] space-y-8 lg:space-y-0">
          <div className="w-[100%] lg:w-[25%]">
            <img src={footerLogo} alt="" />
            <p className="text-base leading-[146%] text-white my-4">
              Leo dui fermentum tristique urna <br /> tellus eget amet aliquam. Id
              vitae <br /> orci maecenas tortor odio Leo dui fermentum tristique urna
              tellus eget <br /> amet aliquam.
            </p>
            <div className="grid grid-cols-3 gap-y-4">
              <img src={footerIcon} alt="" />
              <img src={footerIcon} alt="" />
              <img src={footerIcon} alt="" />
              <img src={footerIcon} alt="" />
              <img src={footerIcon} alt="" />
              <img src={footerIcon} alt="" />
            </div>
          </div>

          <div className="w-[100%] lg:w-[11.5%]">
            <h3 className="text-white text-base font-semibold leading-[95.5%] mb-6">Quick Links</h3>
            <ul className="space-y-5 text-[#DBDBDB] text-base leading-[81%]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">CHi Siamo</a>
              </li>
              <li>
                <a href="#">S.I.R.E</a>
              </li>
              <li>
                <a href="#">SIRE Features</a>
              </li>
              <li>
                <a href="#">Why SIRE?</a>
              </li>
              <li>
                <a href="#">SIRE Product</a>
              </li>
              <li>
                <a href="#">How it Works?</a>
              </li>
            </ul>
          </div>

          <div className="w-[100%] lg:w-[15%]">
            <h3 className="text-white text-base font-semibold leading-[95.5%] mb-6">Useful Links</h3>
            <ul className="space-y-5 text-[#DBDBDB] text-base leading-[81%]">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>

            <h3 className="text-white text-base font-semibold leading-[95.5%] mb-6 mt-12">Documents</h3>
            <ul className="space-y-5 text-[#DBDBDB] text-base leading-[81%]">
              <li>
                <a href="#">Linked Here</a>
              </li>
            </ul>
          </div>

          <div className="w-[100%] lg:w-[28%]">
            <h3 className="text-white text-base font-semibold leading-[95.5%] mb-6">Contact Us</h3>
            <div className="flex flex-row items-start">
              <img className="pt-[2px]" src={locationIcon} alt="" />
              <p className="pl-5 text-white">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>
            <div className="my-6 flex flex-row items-center">
              <img className="pb-1" src={messageIcon} alt="" />
              <div className="pl-5">
                <a className="block mb-1 text-white" href="mailto:email@email.com">email@email.com</a>
                <a className=" text-white" href="mailto:support@email.com">support@email.com</a>
              </div>
              
            </div>

            <div className="flex flex-row items-start">
              <img src={callIcon} alt="" />
              <a className="pl-5 text-white" href="telto:">+29 98595 8998</a>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-[#C9C9C9] flex flex-row justify-between items-center">
            <p className="text-[14px] text-white leading-[91.5%]">All Rights Reserved</p>
            <div className="flex flex-row space-x-6 items-center">
                <img className="cursor-pointer" src={fbIcon} alt="" />
                <img className="cursor-pointer" src={igIcon} alt="" />
                <img className="cursor-pointer" src={twtIcon} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};
