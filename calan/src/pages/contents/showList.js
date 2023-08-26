import {createElement, lazy, Suspense} from "react";


export default function ShowListPage(){




    return(
        <div className='relative w-full pt-[10px] mt-[50px]' >

            <div>
                {
                    new Array(17).fill(0).map((item, index) => (
                        <Suspense fallback={<div>loading...</div>}>
                            <div className='mx-[100px] border-2 mb-[150px]'>
                                {
                                    createElement(lazy(() => import(`./contents${index + 1}`)), {})
                                }
                            </div>
                        </Suspense>
                    ))
                }
            </div>



        </div>
    )
}
