import DisplayBoxComponent from "../../components/DisplayBox";
import {createElement, lazy, Suspense} from "react";
import {useParams} from "react-router-dom";


export default function FeaturesIndex(){

    const param = useParams();

    return(
        <div>
            <h1>features</h1>

            <Suspense fallback={<div>loading...</div>}>
                <DisplayBoxComponent title={`features-${param.id}`}>
                    {
                        createElement(lazy(() => import(`./features${param.id}`)), {})
                    }
                </DisplayBoxComponent>
            </Suspense>

        </div>
    )
}
