<!-- <template>
  <div>
    <router-view/>
  </div>
</template> -->

<template>
  <div>
    
    
    <div class="flex">
      <Sidebar @tabSelected="handleTabSelected"/>
      <div class="w-full">
        <Navbar/>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebars.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    handleTabSelected(tabName) {
     
      this.$router.push('/' + tabName);
    },
  },
};
</script>
