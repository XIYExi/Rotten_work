import About02HomePage from "@/pages/house/About02/About02HomePage";
import CreateAgencyPage from "@/pages/house/CreateAgency/CreateAgency";
import PackagesPage from "@/pages/house/CreateAgency/Packages";


export default function CreateAgencyIndex() {

  return(
    <>
      <About02HomePage
        title='Agency Create'
        meta='Create Agency'
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
      />

      <CreateAgencyPage />

      <PackagesPage />

    </>
  )
}
