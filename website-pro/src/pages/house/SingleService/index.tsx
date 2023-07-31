import About02HomePage from "@/pages/house/About02/About02HomePage";
import ChooseUs02Page from "@/pages/house/Home06/ChooseUs02";
import NewlyAddedPage from "@/pages/house/Home01/NewlyAdded";
import AgentsPage from "@/pages/house/Home01/Agents";
import PartnerPage from "@/pages/house/Home01/Partner";


export default function SingleServicePage() {

  return(
    <>
      <About02HomePage
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
        meta='Our Services'
        title='Sale Property'
      />

      <ChooseUs02Page />

      <div style={{marginTop:'-80px'}}>
        <NewlyAddedPage />
      </div>

      <AgentsPage />

      <div style={{marginTop:'-80px', marginBottom:'-40px'}}>
        <PartnerPage />
      </div>


    </>
  )
}
