/**
 * @Description: about01页面入口
 * @Author: xiye
 * @date: 2023/7/30
 */
import React from "react";
import AboutHomePage from "./AboutHomePage";
import SincePage from "@/pages/house/About01/SincePage";
import PartnerPage from "@/pages/house/Home01/Partner";
import AboutServicePage from "@/pages/house/About01/AboutService";
import ChooseUsPage from "@/pages/house/Home01/ChooseUs";
import aboutImage from '@/assets/image/about/about.png';
import TestimonialPage from "@/pages/house/Home01/Testimonial";


export default function About01Index() {

  return(
    <>
      <AboutHomePage />
      <SincePage />
      <PartnerPage />
      <AboutServicePage />

      <div>
        <ChooseUsPage img={aboutImage}/>
      </div>

      <TestimonialPage />
    </>
  )
}
