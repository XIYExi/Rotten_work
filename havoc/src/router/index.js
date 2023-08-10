import HomeIndex from "../pages/home";
import WorksPage from "../pages/works";
import WorksSingleIndex from "../pages/works-single";
import AboutIndex from "../pages/about";
import EventSingleIndex from "../pages/event-single";
import EventsListIndex from "../pages/events-list";
import ContactIndex from "../pages/contact";
import TeamIndex from "../pages/team";
import {createHashRouter} from "react-router-dom";
import App from "../App";


const routers = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/team',
        element: <TeamIndex />
      },
      {
        path: '/contact',
        element: <ContactIndex />
      },
      {
        path: '/events-list',
        element: <EventsListIndex />
      },
      {
        path: '/event-single',
        element: <EventSingleIndex />
      },
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
