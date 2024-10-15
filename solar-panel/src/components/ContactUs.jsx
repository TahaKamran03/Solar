import React from "react";
import location from "../assets/contact-location-icon.svg";
import message from "../assets/contact-message-icon.svg";
import phone from "../assets/contact-phone-icon.svg";

export const ContactUs = () => {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold leading-[84%] mb-7 text-center">
          CONTATTACI
          </h1>
          <div className="w-32 mx-auto h-1 bg-green-500"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mb-20 space-y-9 lg:space-y-0">

            <div className="w-[100%]  lg:w-[31.5%] border border-[#DEDEDE] p-7 rounded-lg">
                <div className="flex items-start  mb-9">
                    <img className="pr-4" src={location} alt="" />
                    <p className="text-base text-[#666666] leading-[133%]">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                </div>

                <div className="flex items-start mb-9">
                    <img  className="pr-4"src={message} alt="" />
                    <div>
                        <a className="block mb-1 text-base text-[#666666]" href="mailto:email@email.com">email@email.com</a>
                        <a className="text-base text-[#666666]" href="mailto:support@email.com">support@email.com</a>
                    </div>
                </div>

                <div className="flex items-start mb-9">
                    <img className="pr-4" src={phone} alt="" />
                    <a href="telto:+29985958998" className="text-base text-[#666666]">+29 98595 8998</a>
                </div>
                <div className="px-7 bg-[#DEDEDE] h-[1px] mb-5"></div>
                <p className="text-base text-[#363636]">We Will get back to you within
                24 hours. Or Call us Now</p>
            </div>

            <div className="w-[100%] lg:w-[65%] border border-[#DEDEDE] p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row justify-between mb-[14px] space-y-4 lg:space-y-0">
                    <input className="px-4 py-4 w-[100%] lg:w-[48.5%] h-[45px] border border-[#DEDEDE] rounded-md outline-none" type="text" placeholder="First Name" />
                    <input className="px-4 py-4 w-[100%] lg:w-[48.5%] h-[45px] border border-[#DEDEDE] rounded-md outline-none" type="text" placeholder="Last Name" />
                </div>

                <input type="text" placeholder="Email" className="px-4 py-4 w-full border border-[#DEDEDE] rounded-md outline-none mb-[14px] h-[45px]" />
                <textarea name="Message" placeholder="Message" className="w-[100%] h-[115px] border border-[#DEDEDE] rounded-md outline-none py-4 px-4 resize-none mb-4" ></textarea>
                <div className="text-right">
                    <button className="w-[100%] lg:w-auto bg-green-500 text-white rounded-md text-[15px] py-4 px-12">Send</button>
                </div>
            </div>
        </div>


      </div>
    </section>
  );
};
