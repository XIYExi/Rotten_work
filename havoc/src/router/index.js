import HomePage from "../pages/home";
import WorksPage from "../pages/works";
import WorksSinglePage from "../pages/works-single";
import AboutPage from "../pages/about";
import {createHashRouter} from "react-router-dom";


const routers = [
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/works-single',
      element: <WorksSinglePage />
    },
    {
      path: '/works',
      element: <WorksPage />
    },
    {
        path: '/',
        element: <HomePage/>
    }
]

const router = createHashRouter(routers);


export default router;
