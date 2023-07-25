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
import Tenants from './components/Tenants.vue'
import TenantsView from './components/TenantView.vue'
import LeaseContract from './components/Leasecontracts.vue'
import Maintenance from './components/Maintenance.vue'
import Hr  from './components/Hr.vue'
import Accounting from './components/Accounting.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/tenants',
    name: 'Tenants',
    component: Tenants
  },
  {
    path: '/tenants/:tenantName',
    name: 'TenantsView',
    component: TenantsView
  },
  {
    path: '/lease_contracts',
    name: 'LeaseContract',
    component: LeaseContract
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '/hr',
    name: 'HR',
    component: Hr
  },
  {
    path: '/accounting',
    name: 'Accounting',
    component: Accounting
  },
]
const router = createRouter({
  history: createWebHistory(),
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
