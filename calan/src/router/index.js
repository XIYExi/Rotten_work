import App from "../App";
import HeadersIndex from "../pages/headers";
import ContentsIndex from "../pages/contents";
import {createHashRouter} from "react-router-dom";


const router = [

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
