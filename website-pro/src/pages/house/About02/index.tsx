import AboutServicePage from "@/pages/house/About01/AboutService";
import Testimonial02Page from "@/pages/house/Home04/Testimonial02";
import PartnerPage from "@/pages/house/Home01/Partner";
import AgentsPage from "@/pages/house/Home01/Agents";
import About02HomePage from "@/pages/house/About02/About02HomePage";
import Header02Component from "@/pages/house/components/Header02";
import AlertBarComponent from "@/pages/house/components/AlertBar";
import Since02Page from "@/pages/house/About02/Since02Page";


export default function ABout02Index(){

  return(
    <>

      <About02HomePage
        desc='Huge number of propreties availabe here for buy and sell,also you can find here co-living property'
        meta='About us'
        title='About Bary.'
      />
      <Since02Page />

      <AboutServicePage />
      <Testimonial02Page />

      <div className='pt-[-80px] lg:pt-[-80px]'>
        <PartnerPage />
      </div>

      <AgentsPage />
    </>
  )
}
