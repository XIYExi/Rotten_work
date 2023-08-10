import UpcomingPage from "../home/Upcoming";
import AboutPage from "./About";
import ClientsPage from "./Clients";

export default function AboutIndex(){

    return(
        <div>
            <AboutPage />
            <ClientsPage />
            <UpcomingPage />
        </div>
    )
}
