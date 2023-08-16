import App from "../App";
import HeadersIndex from "../pages/headers";
import ContentsIndex from "../pages/contents";
import {createHashRouter} from "react-router-dom";
import LayoutIndex from "../layout";


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
        path: '/contents/:id',
        element: <ContentsIndex />,
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
