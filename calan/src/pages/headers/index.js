import {createElement, lazy, Suspense} from "react";
import {useParams} from "react-router-dom";


export default function HeadersIndex(){

  const param = useParams();

  return(
    <div>
      header

      <Suspense fallback={<div>loading...</div>}>

        {createElement(lazy(() => import(`./headers${param.id}`)))}

      </Suspense>

    </div>
  )
}
