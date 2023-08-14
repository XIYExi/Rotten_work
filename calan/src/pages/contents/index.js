import {createElement, lazy, Suspense, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DisplayBoxComponent from "../../components/DisplayBox";

const Content02 = lazy(() => import('./contents02'))
export default function ContentsIndex(){

  const param = useParams();


  return(
    <div>
      contents

      <Suspense fallback={<div>loading...</div>}>
        <DisplayBoxComponent title={`content-${param.id}`}>
          {
            createElement(lazy(() => import(`./contents${param.id}`)))
          }
        </DisplayBoxComponent>
      </Suspense>

    </div>
  )
}
