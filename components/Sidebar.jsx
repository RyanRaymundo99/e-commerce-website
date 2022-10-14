import React, { useState } from 'react';
import {BiMenuAltRight, BiMenuAltLeft} from 'react-icons/bi';
import {FiMenu,FiX,FiGitlab   } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Menu = () => (
  <>
  <p><a href='#Pricing'>Planos</a></p>
  <p><a href='#Channels'>Vantagens</a></p>
  <p><a href='#freetrial'>Teste</a></p>
  </>
)

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className='cine-club__navbar bg-gradient-to-r from-red-500 via-purple-500/80 to-pink-500/80 backdrop-blur-[10px]'>
      <div className='cine-club__navbar-links'>
          <div className='cine-club__navbar-links_logo'>
              <div className='logo'><FiGitlab style={{ fontSize: '50' }} /></div>
          </div>
          <div className='cine-club__navbar-links_container'>
            <Menu />
          </div>
          
      </div>
      <div className='cine-club__navbar-menu'>
        <FiMenu color="#f" size="27" onClick={showSidebar}/>
      </div>      
      </div>


      <form>   
        <label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-pink-300">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5  dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class=" border-none focus:ring-blue-500 block p-4 pl-10 w-full text-sm text-pink-900 dark:bg-white dark:placeholder-purple-400 dark:text-pink-500" placeholder="Search Mockups, Logos..." required=""/>
            
        </div>
      </form>

      
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <BiMenuAltLeft className="text-3xl"  />
            </li>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full mb-5">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full mb-5">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div class="text-white w-full">
              <div class=" flex p-2 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;