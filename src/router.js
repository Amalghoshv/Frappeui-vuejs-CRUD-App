import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Properties from './components/Properties.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebars.vue'
import { createApp } from 'vue'
import Home from './pages/Home.vue'
import Units from './components/Units.vue'
import Portfolio from './components/Portfolio.vue'
import Propertyview from './components/PropertiesView.vue'
import UnitsView from './components/UnitsView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
 
  {
    path: '/properties',
    name: 'properties',
    component: Properties
  },
  {
    path: '/frontend/', 
    component: Home, 
    name: 'Frontend',
  },
  {
    path: '/units', 
    component: Units, 
    name: 'Units',
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/properties/:itemName',
    name: 'propertiesview',
    component: Propertyview
  },
  {
    path: '/units/:itemName',
    name: 'unitsView',
    component: UnitsView
  },
]
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});


// let router = createRouter({
//   history: createWebHistory('/frontend'),
//   routes,
// })
const app=createApp({})
app.component('Sidebar', Sidebar)
app.component('Navbar', Navbar)

export default router
