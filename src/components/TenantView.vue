<template>
    <div>
      <div class="m-3">
        <router-link to="/tenants">&larr; Back to Tenant List</router-link>
      </div>
  
      <div class="p-3 bg-white m-4 headdiv d-flex justify-end">
        <div class="me-auto pa-2 flex">
          <h3 class="bg-white font-italic">Tenant Details</h3>
          &nbsp;<span>&#8614;</span>&nbsp;
          <h4 class="text-blue">{{ tenantName }}</h4>
        </div>
        <!-- <div class="mx-2">
          <v-btn class="mx-2" @click="openDialog()" icon
            ><font-awesome-icon :icon="['fas', 'pen']"
          /></v-btn>
          <v-btn @click="deleteUnit(),showAlertD()" icon
            ><font-awesome-icon :icon="['fas', 'trash-alt']"
          /></v-btn>
        </div> -->
      </div>
      
  
      <div class="d-flex bg-white m-4 headdiv justify-space-evenly">
        <div class="d-flex justify-start">
          <img
            class="m-5"
            src="https://cdn-icons-png.flaticon.com/512/488/488938.png?w=740&t=st=1689667909~exp=1689668509~hmac=10f893a5c6dedde4030f83938b22fb0d945a5d5cf2d88e84abf4179322becf80"
            alt=""
          />
  
          <div class="m-9 mt-9">
            <h1 class="ml-2 text-h5">{{ tenantName }}</h1>
            <h2 class="ml-3 text-h6 border-yellow-500">{{ tenantUnit }}</h2>
  
            <v-chip
              class="text-subtitle-2"
              color="orange"
              text-color="white"
              append-icon="mdi-star"
              >{{ tenantStatus }}
            </v-chip>
            
  
            <h5>Rent Start Date :{{ startDate }}</h5>
            <h5>Rent End Date:{{ endDate }}</h5>
          </div>
        </div>
  
        <div></div>
      </div>
      <div></div>
    </div>
  </template>
  <style scoped>
  .headdiv {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 5px;
  }
  .text-blues {
    color: blue;
  }
  h3 {
    border-bottom: 2px solid blue;
    display: inline-block;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  a {
    color: blue;
  }
  img {
    width: 40%;
    border-radius: 15px;
  }
  </style >
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faHome, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
  
  library.add(faHome, faPen, faTrashAlt)
  import { useRouter } from 'vue-router';
  import 'vuetify/dist/vuetify.css'
  import axios from 'axios'
  export default {
    data() {
      return {
        
        tenantName:'',
        tenantUnit:'',
        endDate:'',
        startDate:'',
        tenantStatus:'',
        loading: false,
        tenantData:'',
        itemName: '',
      }
    },
    beforeRouteEnter(to, from, next) {
      const itemName = to.params.tenantName
      console.log('item name is:', itemName)
      next((vm) => {
        vm.itemName = itemName
        vm.fetchTenantData()
      })
    },
    components: {
      FontAwesomeIcon,
    },
    methods: {
      fetchTenantData() {
        axios
          .get(
            `https://propfi-erp.enfono.com/api/resource/Tenant/${this.itemName}`,
            {
              headers: {
                Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
              },
            }
          )
          .then((response) => {
            const tenantData = response.data.data;
            console.log(tenantData)
          this.tenantName = tenantData.tenant;
          this.tenantStatus = tenantData.agreement_current_status;
          this.tenantUnit = tenantData.unit;
          this.startDate = tenantData.rent_start_date;
          this.endDate = tenantData.rent_end_date;
          
            // this.setunitProperty(unitData.property)
            // this.setunitName(unitData.name)
            // this.setunitType(unitData.unit_type)
            // this.setunitFloors(unitData.floor)
            // this.setunitStatus(unitData.status)
            // this.setunitRate(unitData.rent_amount)
           
          })
          .catch((error) => {
            console.log('tenant response error', error)
          })
      },
  
    
      
    },
  }
  </script>