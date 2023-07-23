<template>
  <div>
    <v-container class="border border-red-400 mx-4 mt-2 rounded-lg topdiv">
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <span class="text">Lease Contract List</span>
        </v-col>
        <v-col cols="auto">
          <v-btn class="bg-info" @click="openDialog()"
            >New Lease Contract</v-btn
          >
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialogVisible"
      persistent
      max-width="600px"
      max-height="600px"
    >
      <v-card>
        <v-card-title class="headline">Add Lease Contract</v-card-title>
        <v-card-text>
          <v-form @submit="saveContract">
            <v-select
              outlined
              :items="customers"
              v-model="customer"
              label="Customer"
            ></v-select>
            <v-select
              outlined
              :items="propertyNames"
              v-model="propertyName"
              label="Property Name"
            ></v-select>

            <VueDatePicker
              auto-apply
              placeholder="Select Writing Date"
              :auto-position="false"
              v-model="wDate"
              label="Writing Date"
              :enable-time-picker="false"
            ></VueDatePicker>
            <VueDatePicker
              class="mt-4"
              auto-apply
              placeholder="Select Rent Start Date"
              :auto-position="false"
              v-model="startDate"
              label="Writing Date"
              :enable-time-picker="false"
            ></VueDatePicker>
            <VueDatePicker
              class="mt-4"
              auto-apply
              placeholder="Select Rent End Date"
              :auto-position="false"
              v-model="endDate"
              label="Writing Date"
              :enable-time-picker="false"
            ></VueDatePicker>

            <v-select
              :items="deposits"
              v-model="deposit"
              label="Deposit status"
            ></v-select>
            <v-select :items="units" v-model="unit" label="Unit"></v-select>
            <v-select
              :items="cStatuses"
              v-model="cStatus"
              label="Status"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveContract(), showAlert()"
            >Save</v-btn
          >
          <v-btn color="secondary" @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="12"
          xl="3"
        >
          <v-card
            :loading="loading"
            class="mx-auto my-08 card1"
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
                height="3"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-row>
              <v-col cols="12" md="4">
                <div class="img-container">
                  <v-img
                    class="text-center my-[28%]"
                    contain
                    height="200"
                    src="https://img.freepik.com/free-vector/tiny-people-signing-giant-contract-flat-illustration_74855-18776.jpg?w=740&t=st=1689714634~exp=1689715234~hmac=cf765fdb0ba80cbb62b1824375a7248c7b76a4d85b34fb4d5de191d558760b1e"
                  ></v-img>
                  <span :class="getStatusClass(item.status)" class="imgspan">{{
                    item.status
                  }}</span>
                </div>
              </v-col>

              <v-col cols="12" md="8">
                <div class="m-2 text-end">
                  <v-btn color="blue" class="mx-2" icon
                    ><font-awesome-icon :icon="['fas', 'pen']"
                  /></v-btn>
                  <v-btn color="red" @click="deleteContract(item)" icon
                    ><font-awesome-icon :icon="['fas', 'trash-alt']"
                  /></v-btn>
                </div>
                <v-card-item>
                  <v-card-title class="text-center">{{
                    item.name
                  }}</v-card-title>

                  <v-card-subtitle class="text-center">
                    <span class="me-1 text-center text-xl">{{
                      item.property
                    }}</span>
                  </v-card-subtitle>
                  <v-card-subtitle class="text-center">
                    <span
                      ><v-chip
                        class="text-subtitle-3 text-center font-semibold"
                        color="red"
                        append-icon="mdi-star"
                        >{{ item.unit }}
                      </v-chip></span
                    >
                  </v-card-subtitle>
                </v-card-item>
                <v-card-subtitle class="text-center">
                  <span class="me-1 text-center">{{ item.customer }}</span>
                </v-card-subtitle>
                <v-card-text class="text-center">
                  <div class="flex justify-between">
                    <div class="my-2 text-subtitle-1 price">
                      &#8377; Deposit {{ item.deposit }}
                    </div>
                  </div>
                  <div class="my-4 text-subtitle-1">
                    Writing Date : {{ item.wdate }}
                  </div>
                  <div class="my-4 text-subtitle-1">
                    Rent Start Date : {{ item.startDate }}
                  </div>
                  <div class="my-4 text-subtitle-1">
                    Rent End Date : {{ item.endDate }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions> </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  

    <script>
import axios from 'axios'

import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  name: 'properties',
  data() {
    return {
      unitTypes: [],
      unitType: '',
      units: [],
      unit: '',
      cName: '',
      name: '',
      customers: [],
      customer: '',
      deposit: '',
      deposits: [],
      wDate: '',
      cStatuses: ['Available', 'Booked', 'Leased'],
      cStatus: '',
      dialogVisible: false,
      unitName: '',
      startDate: '',
      endDate: '',
      propertyNames: [],
      propertyName: '',
      loading: false,
      items: [],
      itemId:''
    }
  },
  mounted() {
    this.fetchContracts()
    this.fetchProperties()
    this.fetchUnits()
  },

  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    getStatusClass(status) {
      if (status === 'Signed agreement received') {
        return 'bg-green-300'
      } else {
        return 'bg-yellow-300'
      }
    },
    fetchProperties() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Unit?fields=["name","property","rent_amount","status", "unit_type","floor"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.items = response.data.data.map((item) => ({
            property: item.property,
            type: item.unit_type,
          }))
          this.propertyNames = Array.from(
            new Set(this.items.map((item) => item.property))
          )
          this.unitTypes = Array.from(
            new Set(this.items.map((item) => item.type))
          )

          console.log('Fetched UNit Data:', this.items)
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
    fetchContracts() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Lease Contract?fields=["name","lease_customer","writing_date","rent_start_date","rent_end_date","property_name","unit_name","security_deposit_status","agreement_status"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.items = response.data.data.map((item) => ({
            name: item.name,
            property: item.property_name,
            type: item.unit_type,
            unit: item.unit_name,
            wdate: item.writing_date,
            startDate: item.rent_start_date,
            endDate: item.rent_end_date,
            deposit: item.security_deposit_status,
            status: item.agreement_status,
            amount: item.rent_amount,
            customer: item.lease_customer,
          }))
          this.propertyNames = Array.from(
            new Set(this.items.map((item) => item.property))
          )
          this.deposits = Array.from(
            new Set(this.items.map((item) => item.deposit))
          )
          this.cStatuses = Array.from(
            new Set(this.items.map((item) => item.status))
          )
          this.customers = Array.from(
            new Set(this.items.map((item) => item.customer))
          )
          console.log('Fetched UNit Data:', this.items)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },

    postData(data) {
      const postData = {
        name: data.cName,
        property_name: data.propertyName,
        security_deposit_status: data.deposit,
        unit_type: data.unitType,
        writing_date: data.wDate,
        agreement_status: data.status,
        rent_start_date: data.startDate,
        rent_end_date: data.endDate,
        lease_customer: data.customer,
        unit_name: data.unit,
      }

      axios
        .post(
          'https://propfi-erp.enfono.com/api/resource/Lease Contract',
          postData,
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('Data successfully posted:', response.data)
          this.fetchContracts()
          this.$router.push('/lease_contracts')
        })
        .catch((error) => {
          console.error('Error posting data:', error)
        })
    },
    showAlertD() {
      this.$swal.fire({
        title: 'Property Deleted Successfully',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    },
    deleteContract(item) {
   this.itemId = item.name;

  axios
    .delete(`https://propfi-erp.enfono.com/api/resource/Lease%20Contract/${this.itemId}`, {
      headers: {
        Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
      },
    })
    .then((response) => {
      console.log('Lease Contract successfully deleted:', itemId);
     
      this.items = this.items.filter((item) => item.name !== itemId);
    })
    .catch((error) => {
      console.error('Error deleting Lease Contract:', error);
     
      this.$swal.fire({
        title: 'Error',
        text: 'Failed to delete Lease Contract. Please try again later.',
        icon: 'error',
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    });
},

    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
      this.fetchContracts()
    },
    saveContract() {
      // Get the values from the input fields
      const contractData = {
        name: this.name,
        propertyName: this.propertyName,
        unitType: this.unitType,
        deposit: this.deposit,
        startDate: this.startDate,
        endDate: this.endDate,
        wDate: this.wDate,
        cStatus: this.cStatus,
        customer: this.customer,
        unit: this.unit,
      }
      console.log('Contract Data is :', contractData)
      this.fetchProperties()
      this.$router.push('/lease_contracts')
      // Call the postData method to post the data
      this.postData(contractData)
      this.closeDialog()
    },
    clearFields() {
      this.cName = ''
      this.property = ''
      this.cStatus = ''
      this.unitType = ''
      this.wDate = ' '
      this.endDate = ''
      this.startDate = ' '
    },
    showAlert() {
      this.$swal.fire({
        title: 'Unit Saved Successfully',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    },
  },
}
</script>
   <style>
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@300&family=Maven+Pro:wght@400;500&family=Poppins:wght@400;700&family=Sen&display=swap');

.price {
  background-color: goldenrod;
  margin-left: 40%;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: 'Geologica', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.img-container:hover {
  scale: 1.03;
  transition: all 0.4s ease-in-out;
  object-fit: contain;
}
.topdiv {
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
body {
  background-color: rgb(226, 239, 243);
}
.more {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
.img-container {
  position: relative;
}

.imgspan {
  position: absolute;
  top: 3px;
  right: 3px;
  /* background-color: lightgreen; */
  padding: 5px 6px;
  font-size: 12px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  border-radius: 5px;
}
.card1:hover {
  border: 1px solid blue;
  background-color: honeydew;
}
</style>