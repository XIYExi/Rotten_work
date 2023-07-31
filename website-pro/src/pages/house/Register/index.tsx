import About02HomePage from "@/pages/house/About02/About02HomePage";
import PartnerPage from "@/pages/house/Home01/Partner";
import CreatePage from "@/pages/house/Register/Create";


export default function RegisterIndex() {

  return(
    <>
      <About02HomePage
        title='Register now!'
        meta='Register'
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
      />

      <CreatePage />

      <div style={{marginBottom:'-120px'}}>
        <PartnerPage />
      </div>
    </>
  )
}
