import App from "../App";
import HeadersIndex from "../pages/headers";
import ContentsIndex from "../pages/contents";
import {createHashRouter} from "react-router-dom";
import LayoutIndex from "../layout";
import ShowListPage from "../pages/contents/showList";
import FeaturesIndex from "../pages/features";


const router = [
  {
    path: '/layout',
    element: <LayoutIndex />
  },
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/features/:id',
        element: <FeaturesIndex />
      },
      {
        path: '/contents/:id',
        element: <ContentsIndex />,
      },
      {
        path: '/contents',
        element: <ShowListPage />,
      },
      {
        path: '/headers/:id',
        element: <HeadersIndex />
      }
    ]
  }
]

const hashRouter = createHashRouter(router);

export default hashRouter;
