import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutUs } from './components/AboutUs'
import { Feature } from './components/Feature'
import { WhyUs } from './components/WhyUs'
import { Benefits } from './components/Benefits'
import { ChoosePlan } from './components/ChoosePlan'
import { Connection } from './components/Connection'
import { Faqs } from './components/Faqs'
import { ContactUs } from './components/ContactUs'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export const AllComponents = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <AboutUs />
        <Feature />
        <WhyUs />
        <Benefits />
        <ChoosePlan />
        <Connection />
        <Faqs />
        <ContactUs />
        <Cta />
        <Footer />
    </>
  )
}