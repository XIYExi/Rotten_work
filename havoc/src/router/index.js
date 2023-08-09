import HomeIndex from "../pages/home";
import WorksPage from "../pages/works";
import WorksSinglePage from "../pages/works-single";
import AboutPage from "../pages/about";
import {createHashRouter} from "react-router-dom";
import App from "../App";


const routers = [
  {
    path: '/',
    element: <App />,
    children: [
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
          element: <HomeIndex/>
      }
    ]
  }
]

const router = createHashRouter(routers);


export default router;
