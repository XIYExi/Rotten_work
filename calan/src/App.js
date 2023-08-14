import './App.css';
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import bar from './assets/images/bar.svg';

function App() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleNavJump = (url) => {
    navigate(url);
    setShow(false);
  }

  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.addEventListener('mousedown' , function(e){
      if(show && e.clientX > 360 && e.clientX < (document.documentElement.clientWidth - 48)){
        setShow(false);
      }
    })
  }, [containerRef.current])

  return (
    <div className="App w-full h-screen relative" ref={containerRef}>

      <img onClick={() => setShow(!show)} src={bar} width={48} height={48} className='fixed top-0 right-0'/>


      home

      <div className={`${!show ? 'translate-x-[-300px]' : 'translate-x-0'} fixed left-0 top-0 z-10 w-[300px] h-full bg-[#7B7B7B] px-12 py-20 transition-all duration-300`}>

        <div className='font-thin font-base hover:font-[500] transition-all duration-300 mb-[20px] cursor-pointer'
             onClick={() => handleNavJump('/headers/01')}
        >
          <span className='text-[20px] '>Headers</span>
        </div>

         <div className='font-thin font-base hover:font-[500] transition-all duration-300 mb-[20px] cursor-pointer'
              onClick={() => handleNavJump('/contents/01')}
         >
            <span className='text-[20px] '>Contents</span>
          </div>


      </div>

      <Outlet />
    </div>
  );
}

export default App;
