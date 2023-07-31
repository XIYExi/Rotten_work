import About02HomePage from "@/pages/house/About02/About02HomePage";
import PartnerPage from "@/pages/house/Home01/Partner";
import LoginPage from "@/pages/house/Login/LoginPage";

export default function LoginIndex() {

  return(
    <>
      <About02HomePage
        desc='Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like'
        meta='Login'
        title='Login now!'
      />

      <LoginPage />

      <div style={{marginBottom:'-120px'}}>
        <PartnerPage />
      </div>

    </>
  )
}
