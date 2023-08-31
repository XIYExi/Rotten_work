import DisplayBoxComponent from "../../components/DisplayBox";
import {createElement, lazy, Suspense, useEffect} from "react";
import {useParams} from "react-router-dom";
import data from './data';


export default function FeaturesIndex(){


    const param = useParams();

    return(
        <div>
            <h1>features</h1>

            <Suspense fallback={<div>loading...</div>}>
                <DisplayBoxComponent title={`features-${param.id}`}>
                    {
                        createElement(lazy(() => import(`./features${param.id}/index`)), data[param.id - 1])
                    }
                </DisplayBoxComponent>
            </Suspense>

        </div>
    )
}
