import {createElement, lazy, Suspense, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DisplayBoxComponent from "../../components/DisplayBox";

const transfer = [
    {
        id: '1',
        title: 'Easy to Use',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: true,
    },
    {
        id: '1',
        title: 'Easy to Use',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: false
    },
    {
        id: '1',
        title: 'Easy to Use',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: false
    }
]

const Content02 = lazy(() => import('./contents02'))
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
