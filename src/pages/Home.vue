<template>
  <div class="flex">
    <div>
      <Sidebars @tabSelected="handleTabSelected" />
    </div>

    <div class="w-full">
      <Navbar />
      <div class="dashboard-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from '../components/Layout.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Tabs, Tab, Button, Badge, Dropdown } from 'flowbite-vue'
import 'flowbite'
import router from '../router'
import Sidebars from '../components/Sidebars.vue'
import Navbar from '../components/Navbar.vue'


export default {
  name: 'Home',
  data() {
    return {
      items: [],
      showDialog: false,
      isOpen: ref(false),
      activeTab: ref('first'),
      showText: true,
      buttonPosition: 'auto',
      showDropdown: false,
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(() => {
      console.log('Current route:', route.value)
    })

    const handleTabSelected = (tabName) => {
      this.activeTab = tabName
      // Use the router to navigate to the selected tab
      router.push('/' + tabName)
    }

    return {
      items,
      handleTabSelected,
    }
  },

  methods: {
    handleTabSelected(tabName) {
      this.activeTab = tabName
      // Use the router to navigate to the selected tab
      this.$router.push('/' + tabName)
    },
    handleTabSelected(tabName) {
      this.activeTab = tabName // Update the active tab based on the selection
    },
    handleItemClick(route) {
      this.$emit('item-clicked', route)
    },
    handleSidebarItemClick(route) {
      this.$router.push(route)
    },
  },

  components: {
    Button,
    Dropdown,
    Tabs,
    Tab,
    Badge,
    Navbar,
   
    Sidebars,
   
    
  },
}
</script>
