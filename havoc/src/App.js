import { Link, Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import bar from './assets/image/home/bar.svg';
import React, { useEffect, useRef, useState } from 'react';
import logo from './assets/image/logo.svg';
import {ReactComponent as Logo} from "./assets/image/blackLogo.svg";

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
          <Logo src={logo} alt='logo' width={97} height={22} style={{stroke: 'black'}}/>
        </div>
        <div className='fixed right-0 top-0 cursor-pointer w-[45px] h-[45px]' style={{zIndex: 999}} onClick={handleClickOpenBar}>
          <img width={45} height={45} loading='lazy' alt='bar' src={bar}/>
        </div>
      </header>
      <div
          className={`${open ? 'translate-x-0' : 'translate-x-[-360px]'} bg-slate-50  transition-all duration-300 fixed w-[360px] h-screen top-0 lef-0 bg-[#f7f7f7]`}
          style={{zIndex: 999}}
      >
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

            <div className='mb-4'>
              <a className='cursor-pointer hover:text-[#FFC85A] font-thin text-lg'
                 onClick={() => handleNavJump('/event-single')}
              >Event Single</a>
            </div>

          </div>
        </div>
      </div>


      <Outlet />

      <div className='w-full py-[80px] lg:py-[120px] bg-[#FFC85A]'>
        <div className='px-[30px] lg:px-[135px] relative'>
          <div className='grid grid-cols-12 gap-x-[50px]'>
            <div className='col-span-12 md:col-span-6'>
              <div>
                <h2 className='mb-6 font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>MEET THE TEAM</h2>

                <div className='text-[80px] font-bold leading-[81px] max-w-[500px] mb-4' style={{letterSpacing: '-1px'}}>
                  Let's get in touch
                </div>

                <div className='max-w-[500px] font-thin text-[20px]'>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure
                </div>
              </div>
            </div>

            <div className='col-span-12 md:col-span-6'>

              <form action='#'>

                <div className="my-group mb-[37px]">
                  <input required={true} type="text" className="my-input w-full" />
                  <span className="my-bar w-full"></span>
                  <label className='my-label'>Name</label>
                </div>

                <div className="my-group  mb-[37px]">
                  <input required={true} type="text" className="my-input w-full" />
                  <span className="my-bar w-full"></span>
                  <label className='my-label'>Email</label>
                </div>

                <div className="my-group mb-[32px]">
                  <textarea required={true} rows={4}  className="my-input w-full" />
                  <span className="my-bar w-full"></span>
                  <label className='my-label'>Description</label>
                </div>

                <div className='text-[20px] font-[600] w-full text-center py-4 bg-black text-white hover:bg-transparent border border-black hover:text-black transition-all duration-300'>
                  Send
                </div>


              </form>

            </div>
          </div>
        </div>
      </div>


      <footer className='bg-[#252525] w-full h-[500px] pt-[80px] lg:pt-[120px] pb-[60px]'>
        <div className='px-[30px] lg:px-[135px] relative h-full'>
          <div className='grid grid-cols-12 gap-x-[60px] h-full'>
            <div className='col-span-12 md:col-span-6 h-full relative'>
              <div>
                <img src={logo} alt='logo' width={97} height={22} className='mb-[23px]'/>

                <div className='font-thin text-white max-w-[350px]'>
                  We love to explore new ways to engage with brands and reach new levels of creative outlets through design.
                </div>


                <div className='absolute bottom-0 left-0 font-thin text-[14px] text-[#7B7B7B]'>
                  © 2020 Havoc. All Rights Reserved
                </div>
              </div>
            </div>

            <div className='col-span-12 md:col-span-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-x-[30px]'>
                <div>
                  <div className='text-white text-[14px] mb-4'>Havoc</div>
                  <ul className='text-[14px] text-[#7B7B7B]'>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Works</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Team</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Events</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>About</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Contact</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='text-white text-[14px] mb-4'>Social</div>
                  <ul className='text-[14px] text-[#7B7B7B]'>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Behance</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Dribbble</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Instagram</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Facebook</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Twitter</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='text-white text-[14px] mb-4'>Legal</div>
                  <ul className='text-[14px] text-[#7B7B7B]'>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Privacy</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Terms</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Cookies</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>License</span>
                    </li>
                    <li className='mb-4 cursor-pointer'>
                      <span className='customFooterLink'>Program</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}


export default App;
