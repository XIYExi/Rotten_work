import { Link, Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import bar from './assets/image/home/bar.svg';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const handleClickOpenBar = () => {
    console.log('?')
    setOpen(!open);
  }

  const AppRef = useRef(null);
  useEffect(() => {
    AppRef.current.addEventListener('mousedown', (e) => {
      if(open && e.clientX > 360 && e.clientX < (document.documentElement.clientWidth - 50)){
        setOpen(false);
      }
    })
  }, [AppRef.current])

  const navigate = useNavigate();
  const handleNavJump = (href) => {
    console.log(href)
    navigate(href);
    setOpen(false);
  }


  return (
    <div className="App" ref={AppRef}>

        <header className='absolute bg-transparent w-full height-[60px] top-0 left-0'>
          <div className='container lg:px-[80px] py-[10px] relative'>
            <h4 className='text-xl font-medium'>Havoc.</h4>
          </div>
          <div className='absolute right-0 top-0 cursor-pointer w-[45px] h-[45px]' onClick={handleClickOpenBar}>
            <img width={45} height={45} loading='lazy' alt='bar' src={bar}/>
          </div>
        </header>

        <div className={`${open ? 'translate-x-0' : 'translate-x-[-360px]'} bg-slate-50  transition-all duration-300 absolute w-[360px] h-screen top-0 lef-0 z-10 bg-[#ffffff]`}>
          <div className='px-12 py-10'>
            <div className='w-full'>

              <div className='mb-4'>
                <a className='cursor-pointer hover:text-[#FFC85A] font-thin text-lg'
                  onClick={() => handleNavJump('/')}
                >Home</a>
              </div>

              <div className='mb-4'>
                <a className='cursor-pointer hover:text-[#FFC85A] font-thin text-lg'
                  onClick={() => handleNavJump('/works')}
                >Works</a>
              </div>

              <div className='mb-4'>
                <a className='cursor-pointer hover:text-[#FFC85A] font-thin text-lg'
                  onClick={() => handleNavJump('/works-single')}
                  >Works Single</a>
              </div>

              <div className='mb-4'>
                <a className='cursor-pointer hover:text-[#FFC85A] font-thin text-lg'
                  onClick={() => handleNavJump('/about')}
                >About</a>    
              </div>

            </div>
          </div>
        </div>


        <Outlet />


        <footer></footer>

    </div>
  );
}


export default App;
