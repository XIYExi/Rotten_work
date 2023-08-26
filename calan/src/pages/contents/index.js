import {createElement, lazy, Suspense, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DisplayBoxComponent from "../../components/DisplayBox";


export default function ContentsIndex(){

  const param = useParams();


  return(
    <div>
      contents

      <Suspense fallback={<div>loading...</div>}>
        <DisplayBoxComponent title={`content-${param.id}`}>
          {
            createElement(lazy(() => import(`./contents${param.id}`)), {})
          }
        </DisplayBoxComponent>
      </Suspense>

    </div>
  )
}
