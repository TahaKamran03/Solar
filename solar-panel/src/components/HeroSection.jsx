import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-hero-image bg-center bg-cover h-[calc(100vh-142px)] bg-no-repeat bg">
      <div className="container">
        <div className="h-[calc(100vh-142px)] flex flex-col justify-center items-center">
          <h1 className="text-5xl leading-[120%] lg:text-[64px] font-bold text-white lg:leading-[87.5%] text-center">
            Il tuo accesso al sole
          </h1>
          <p className="text-lg max-w-[947px] mt-7 text-white lg:text-2xl leading-[141%] font-medium  text-center">
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </p>
        </div>
      </div>
    </section>
  );
};
