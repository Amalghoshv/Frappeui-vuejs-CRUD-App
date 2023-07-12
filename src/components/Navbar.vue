<template>
  <div class="w-full">
    <div class="flex">
      <nav class="bg-white w-full rounded-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center">
            <h5>Home</h5>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          
            <ul class=" flex rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white md:dark:bg-white ">
              <li class="bg-white flex items-center">
                <div>
                  <button @click="toggleFullscreen" class="fullscreen-btn bg-white">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <div class="flex  mt-2 lg:mt-0">
                  <button class="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </li>
              <li >
                <button @click="toggleDropdown()" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white text-center inline-flex items-center  mb-5" type="button">
                  <div class="w-10 h-10 overflow-hidden  rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt08ADSBsRRxQ2xzvxjADA0SCVuwEwY6gASg&usqp=CAU" class="object-cover w-full h-full" alt="avatar"/>
                  </div>
                </button>
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    toggleFullscreen() {
      if (document.fullscreenElement) {
        
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      } else {
        
        const elem = document.documentElement
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        }
      }
    },
  },
}
</script>