import About02HomePage from "@/pages/house/About02/About02HomePage";
import {useEffect, useState} from "react";
import AgencyTablePage from "@/pages/house/Agency/AgencyTable";



export default function AgencyIndex() {


  return(
    <>

      <About02HomePage
        title='Listed Agencies'
        meta='Our Agencies'
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
        />

      <AgencyTablePage />

    </>
  )
}
