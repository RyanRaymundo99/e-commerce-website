import img3 from '../assets/img3.png'

function LingerieBanner() {
  return (
<div className="mt-20">
<div class="max-w-7xl min-w-7xl flex items-center h-auto flex-wrap mx-auto lg:my-0">
  <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl lingerie-bg mx-6 lg:mx-0">
      <div class="p-4 md:p-12 lg:m-10 text-center lg:text-left">
        
          <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" ></div>
          
          <h1 class="text-3xl text-white font-bold title-font pt-8 lg:pt-0">Sexy Lingeries</h1>
          <p class="pt-8 text-gray-100 ">O clássico também pode ser o novo <br/> As rendas têm o toque delicado que desejamos</p>

          <div class="flex items-center flex-wrap mt-4 max-w-23">
              <a class="text-white inline-flex items-center md:mb-2 lg:mb-0 border border-white rounded-xl px-2 py-1">Conferir</a>
              <span class="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>3.2K
              </span>
              <span class="text-white inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>667
              </span>
            </div> 
      </div>
  </div>
  
  <div class="w-full lg:w-2/5">
      <img src={img3.src} class="rounded-none h-128 shadow-2xl hidden lg:block"/>
  </div>
</div>
</div>

  )
}

export default LingerieBanner