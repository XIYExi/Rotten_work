import {createElement, useEffect, useRef} from "react";
import ReactDOM from 'react-dom/client';


export default function DisplayBoxComponent(props) {

  const {title, children} = props;

  const boxRef = useRef(null);
  const displayRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {

    displayRef.current.addEventListener('mousedown', function(e){
      console.log(e)
      // boxRef.current.style.maxWidth='300px';
      // boxRef.current.style.width = '600px';
    })

  }, [boxRef, displayRef])



  return(
    <fieldset className='my-[20px] relative'>
      <legend>{title}</legend>
      <div className='relative border-2 rounded-md mx-10 my-4' ref={boxRef}>

        <div className='relative w-full'>
          {children}
        </div>

        <div ref={displayRef} className='absolute right-0 top-[50%] w-[30px] h-[40px] bg-black'>

        </div>
      </div>


    </fieldset>
  )
}
