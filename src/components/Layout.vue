<template>
  <div class="flex">
    <Navbar />
    <div class="w-full">
      <div class="dashboard-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import Sidebars from '../components/Sidebars.vue'
  import Navbar from '../components/Navbar.vue'
  
  
import Dashboard from './Dashboard.vue'
  
  export default {
    components: {
      Sidebars,
      Navbar,
      Dashboard,
    }
  }
  </script>
  