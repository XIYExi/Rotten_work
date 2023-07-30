import AlertBarComponent from "@/pages/house/components/AlertBar";
import Header02Component from "@/pages/house/components/Header02";
import About02HomePage from "@/pages/house/About02/About02HomePage";
import ChooseUs02Page from "@/pages/house/Home06/ChooseUs02";
import AboutServicePage from "@/pages/house/About01/AboutService";
import AgentsPage from "@/pages/house/Home01/Agents";
import PartnerPage from "@/pages/house/Home01/Partner";
import TestimonialPage from "@/pages/house/Home01/Testimonial";


export default function ServiceIndex() {

  return(
    <>
      <About02HomePage
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
        meta='Our Services'
        title='Services we Provide'
      />

      <ChooseUs02Page />

      <AboutServicePage />

      <AgentsPage />

      <div style={{marginTop:'-80px'}}>
        <PartnerPage/>
      </div>

      <TestimonialPage />

    </>
  )
}
