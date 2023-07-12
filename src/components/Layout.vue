<template>
  <div class="flex">
    <div>
      <Sidebars/>
    </div>

    <div class="w-full">
      
      <div class="dashboard-wrapper">
        <router-view></router-view>
        <Dashboard/>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import Sidebars from '../components/Sidebars.vue'
  
  
  
import Dashboard from './Dashboard.vue'
  
  export default {
    components: {
      Sidebars,
      
      Dashboard,
    }
  }
  </script>
  