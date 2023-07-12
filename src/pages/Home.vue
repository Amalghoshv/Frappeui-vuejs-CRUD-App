<template>
  <div>
  <Layout>
    <Sidebars @tabSelected="handleTabSelected" />
  </Layout>
  <component :is="activeTab"></component>
    <router-view></router-view>
  </div>
</template>


<script>
import Layout from '../components/Layout.vue'
import { onMounted,ref, onBeforeMount  } from 'vue'
import { useRoute, useRouter } from 'vue-router' 
import axios from 'axios';






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
    const route = useRoute();
    const router = useRouter();
    const items = ref([])
    const fetchData = () => {
      axios
        .get('https://propfi-erp.enfono.com/api/resource/Unit/', {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
          },
        })
        .then(response => {
          items.value = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    }

    onBeforeMount(() => {
      fetchData();
    });

    onMounted(() => {
      console.log('Current route:', route.value);
    });
   
  const handleTabSelected =   tabName => {
      this.activeTab = tabName;
      // Use the router to navigate to the selected tab
      router.push('/' + tabName);
    };
   
    
    return {
      items,
      handleTabSelected,
    };
  },
  

  methods: {
   
   
    fetchData() {
      axios.get('https://propfi-erp.enfono.com/api/resource/Unit/',{
        headers:{
          Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7'
        }
      })
        .then(response => {
          this.items = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          console.log('Error response:', error.response);
      console.log('Error message:', error.message);
        });
    },
    
    handleTabSelected(tabName) {
      this.activeTab = tabName;
      // Use the router to navigate to the selected tab
      this.$router.push('/' + tabName);
    },
    handleTabSelected(tabName) {
      this.activeTab = tabName; // Update the active tab based on the selection
    },
    // getData() {
    //   fetch('https://propfi-erp.enfono.com/api/resource/Unit/', {
    //     headers: {
    //       Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
    //     },
    //   })
    //     .then((r) => r.json())
    //     .then((r) => {
    //       console.log(r)
    //     })
    // },
  
    handleItemClick(route) {
      this.$emit('item-clicked', route)
    },
    handleSidebarItemClick(route) {
      this.$router.push(route)
    },
    
  },
  resources: {
    ping: {
      url: 'ping',
    },
  },

  components: {
    Button,
    Dropdown,
    Tabs,
    Tab,
    Badge,
    BarChart,
    
    Sidebars,
    Dashboard,
    Navbar,

    Layout
  },
  }
</script  >
