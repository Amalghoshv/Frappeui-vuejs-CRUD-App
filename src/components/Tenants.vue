<template>
  <div>
    <v-container class="border border-red-400 mx-4 mt-2 rounded-lg topdiv">
      <v-row align="center" justify="space-between">
        <v-col class="" cols="auto">
          <span class="text">Tenants List</span>
        </v-col>
        <v-col cols="auto">
          <v-btn class="bg-info btn" @click="openDialog()">Add Tenant</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialogVisible"
      persistent
      max-width="600px"
      max-height="800px"
    >
      <v-card>
        <v-card-title class="headline">Add Tenant</v-card-title>
        <v-card-text>
          <v-form @submit="saveTenant()">
            <v-text-field
              v-model="tenantName"
              label="Tenant Name"
            ></v-text-field>
            <v-select
              :items="units"
              v-model="tunit"
              label="Tenant Unit"
            ></v-select>
            <v-select
              :items="statuses"
              v-model="status"
              label="Status"
            ></v-select>

            <VueDatePicker v-model="date" type="date" label="End Date"
              >End Date</VueDatePicker
            >
            <VueDatePicker v-model="pickerone" type="date" label="End Date"
              >End Date</VueDatePicker
            >
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveTenant(), showAlert()">Save</v-btn>
          <v-btn color="secondary" @click="closeDialog()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- tabs section -->
    <v-container fluid class="mx-4 tabmain">
      <v-row>
        <v-card>
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
          >
            <v-tab :value="1">Profile</v-tab>
            <v-tab :value="2">Dues</v-tab>
            <v-tab  :value="3">Transactons</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item v-for="n in 3" :key="n" :value="1">
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="(item, index) in items"
                    :key="index"
                    cols="12"
                    sm="6"
                    md="6"
                    lg="3"
                    xl="3"
                  >
                    <router-link
                      :to="{
                        name: 'TenantsView',
                        params: { tenantName: item.tenantName },
                      }"
                    >
                      <v-card
                        :loading="loading"
                        class="mx-auto my-12 card1"
                        max-width="374"
                        cols="12"
                        sm="6"
                        md="6"
                        lg="3"
                        xl="3"
                      >
                        <template v-slot:loader="{ isActive }">
                          <v-progress-linear
                            :active="isActive"
                            color="deep-purple"
                            height="4"
                            indeterminate
                          ></v-progress-linear>
                        </template>
                        <div class="img-container">
                          <v-img
                            contain
                            height="200"
                            src="https://cdn-icons-png.flaticon.com/512/488/488938.png?w=740&t=st=1689667909~exp=1689668509~hmac=10f893a5c6dedde4030f83938b22fb0d945a5d5cf2d88e84abf4179322becf80"
                          ></v-img>
                          <span
                            :class="getStatusClass(item.status)"
                            class="imgspan"
                            >{{ item.status }}</span
                          >
                        </div>
                        <v-card-item>
                          <v-card-title>{{ item.tenantName }}</v-card-title>

                          <v-card-subtitle>
                            <span class="me-1 types">{{ item.unit }}</span>

                            <v-icon
                              color="error"
                              icon="mdi-fire-circle"
                              size="small"
                            ></v-icon>
                          </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                          <div class="my-4 text-subtitle-1">
                            Rent Start Date :{{ item.startDate }}
                          </div>
                          <div class="my-4 text-subtitle-1">
                            Rent End Date {{ item.endDate }}
                          </div>

                          <div>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                          </div>
                        </v-card-text>

                        <v-divider class="mx-4 mb-1"></v-divider>
                        <v-card-actions>
                          <v-btn
                            color="deep-purple-lighten-2 more"
                            variant="text"
                          >
                            More
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </router-link>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>

            <!-- Content for the "Dues" tab -->
            <v-window-item class="tabdue"  :value="2">
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <table class="min-w-full divide-y divide-gray-200 ">
                      <thead class="bg-gray-50 text-center">
                        <tr>
                          <th
                            class="text-center py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Invoice No
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tenant Name
                          </th>
                          <th
                            class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Unit 
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 text-center">
                        <tr v-for="(item, index) in duesData" :key="index">
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 "
                          >
                            {{ item.name}}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.customer }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.lease_data}}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.outstanding_amount }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            <Badge :type="getBadgeType(item.status) ">{{ item.status }}</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>

            <!-- Content for the "Transaction" tab -->

            <v-window-item :value="3">
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr >
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Transaction ID
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tenant Name
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Transaction Date
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 text-center">
                        <tr v-for="(item, index) in transactionData" :key="index">
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 "
                          >
                            {{ item.name}}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.party }}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.posting_date}}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {{ item.paid_amount}}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            <Badge :type="getBadgeTypeT(item.status) ">{{ item.status }}</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
        <!--  -->
      </v-row>
    </v-container>
  </div>
</template>
  
  <script>
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {  Badge } from 'flowbite-vue'

export default {
  name: 'Tenants',
  components: { VueSweetalert2, VueDatePicker },
  data() {
    return {
      numberOfTenants: 0,
      duesData: [],
      transactionData:[],
      dialogVisible: false,
      tenantData: [],
      tunits: [],
      tunit: '',
      tab: null,
      tenantName: '',
      statuses: ['Signed agreement received', 'Cancelled'],
      status: '',
      startDate: new Date(),
      endDate: new Date(),
      loading: false,
      items: [],
      pickerone: new Date().toISOString().substr(0, 10),
      unit: '',
      units: [],
      date: new Date(),
    }
  },
  components:{Badge},

  mounted() {
    this.fetchTenant()
    this.fetchUnits()
    this.fetchDues()
    this.fetchTransaction()
  },
  computed: {},
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    getBadgeType(status) {
    if (status === 'Overdue') {
      return 'red';
    } else {
      return 'green';
    }
  },

  getBadgeTypeT(status) {
    if (status === 'Submitted') {
      return 'red';
    } else {
      return 'green';
    }
  },
    getStatusClass(status) {
      if (status === 'Signed agreement received') {
        return 'bg-green-300'
      } else {
        return 'bg-yellow-300'
      }
    },
    fetchDues() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Sales Invoice?fields=["customer", "name","outstanding_amount","status","lease_data"]&filters=[["status", "!=", "Paid"],["outstanding_amount", ">", "0"]]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.duesData = response.data.data
          
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    fetchTransaction() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Payment Entry?fields=["name", "party","posting_date","paid_amount","status"]&filters=[["status", "=", "Submitted"]]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.transactionData = response.data.data
         
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    fetchUnits() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Unit?fields=["name"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.units = response.data.data.map((unit) => ({
            name: unit.name,
          }))
          this.units = Array.from(new Set(this.units.map((unit) => unit.name)))
          console.log('Fetched UNit Data:', this.items)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },

    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
      this.fetchTenant()
    },
    saveTenant() {
      const TenantData = {
        tenantName: this.tenantName,
        status: this.status,
        unit: this.unit,
        startDate: this.startDate,
        endDate: this.endDate,
      }
      console.log('TenantData is :', TenantData)
      this.fetchTenant()
      this.$router.push('/tenants') 

      this.postData(TenantData)
      this.closeDialog()
    },

    fetchTenant() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Tenant?fields=["tenant", "agreement_current_status", "rent_start_date","rent_end_date","unit"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          console.log('response data is ', response.data.data)
          this.items = response.data.data.map((item) => ({
            tenantName: item.tenant,
            status: item.agreement_current_status,
            unit: item.unit,
            startDate: item.rent_start_date,
            endDate: item.rent_end_date,
          }))

          console.log('Fetched Tenant Data:', this.items)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    postData(data) {
      const postData = {
        tenant: data.tenantName,
        agreement_current_status: data.status,
        unit: data.unit,
        rent_start_date: data.startDate,
        rent_end_date: data.endDate,
      }

      axios
        .post('https://propfi-erp.enfono.com/api/resource/Tenant', postData, {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('Data successfully posted:', response.data)
          this.fetchTenant()
          this.$router.push('/tenants')
        })
        .catch((error) => {
          console.error('Error posting data:', error)
        })
    },
    showAlert() {
      this.$swal.fire({
        title: 'Tenant Saved Successfully',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    },

    clearFields() {
      this.tenantName = ''
      this.status = ''
      this.endDate = ''
      this.startDate = ' '
      this.units = ''
    },
  },
}
</script>
  
  <style scoped>

.w-51 {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border: 1px solid blue;
}
.bar {
  width: 500px;

  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.line {
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  width: 80%;
}
.tables {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
  