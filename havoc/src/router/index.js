import HomeIndex from "../pages/home";
import WorksPage from "../pages/works";
import WorksSingleIndex from "../pages/works-single";
import AboutIndex from "../pages/about";
import {createHashRouter} from "react-router-dom";
import App from "../App";


const routers = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <AboutIndex />
      },
      {
        path: '/works-single',
        element: <WorksSingleIndex />
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
