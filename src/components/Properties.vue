<template>
  <div>
    <v-container class="border border-red-400 mx-4 mt-2 rounded-lg topdiv">
      <v-row align="center" justify="space-between">
        <v-col class="" cols="auto">
          <span class="text">Properties List</span>
        </v-col>
        <v-col cols="auto">
          <v-btn class="bg-info btn" @click="openDialog()">Add Property</v-btn>
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
        <v-card-title class="headline">Add Property</v-card-title>
        <v-card-text>
          <v-form @submit="saveProperty">
            <v-text-field
              v-model="propertyName"
              label="Property Name"
            ></v-text-field>
            <v-select
              :items="ptype"
              v-model="property_type"
              label="Property Type"
            ></v-select>
            <v-select :items="drops" v-model="status" label="Status"></v-select>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field
              v-model="numberOfUnits"
              label="Number of Units"
            ></v-text-field>
            <v-text-field
              v-model="numberOfFloors"
              label="Number of Floors"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveProperty(), showAlert()"
            >Save</v-btn
          >
          <v-btn color="secondary" @click="closeDialog()">Cancel</v-btn>
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
          lg="3"
          xl="3"
        >
          <router-link
            :to="{ name: 'propertiesview', params: { itemName: item.name } }"
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
                  cover
                  height="250"
                  src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
                ></v-img>
                <span :class="getStatusClass(item.status)" class="imgspan">{{
                  item.status
                }}</span>
              </div>
              <v-card-item>
                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-subtitle>
                  <span class="me-1 types">{{ item.type }}</span>

                  <v-icon
                    color="error"
                    icon="mdi-fire-circle"
                    size="small"
                  ></v-icon>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  Total Units : {{ item.units }}
                </div>
                <div class="my-4 text-subtitle-1">
                  Floor : {{ item.floors }}
                </div>

                <div>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </div>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>
              <v-card-actions>
                <v-btn color="deep-purple-lighten-2 more" variant="text">
                  More
                </v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  <style>
.topdiv {
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
body {
  background-color: rgb(226, 239, 243);
}
v-card {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
.more {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.img-container {
  position: relative;
}
.img-container:hover {
  scale: 1.03;
  transition: all 0.4s ease-in-out;
  object-fit: contain;
}

.imgspan {
  position: absolute;
  top: 3px;
  right: 3px;
  background-color: lightgreen;
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
  <script>
import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
export default {
  name: 'properties',
  data() {
    return {
      drops: ['Available', 'Not Available'],
      ptype: ['Commercial', 'HOTEL'],
      dialogVisible: false,
      propertyName: '',
      propertyRate: '',
      property_type: '',
      numberOfUnits: '',
      numberOfFloors: '',
      email: '',
      status: '',
      loading: false,
      items: [],
    }
  },
  mounted() {
    this.fetchProperties()
  },
  components: {
    VueSweetalert2,
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },

    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
      this.fetchProperties()
    },
    saveProperty() {
      // Get the values from the input fields
      const propertyData = {
        propertyName: this.propertyName,
        property_type: this.property_type,
        numberOfUnits: this.numberOfUnits,
        numberOfFloors: this.numberOfFloors,
        status: this.status,
        email: this.email,
      }
      console.log('propertyData is :', propertyData)
      this.fetchProperties()
      this.$router.push('/properties')

      this.postData(propertyData)
      this.closeDialog()
    },
    getStatusClass(status) {
      if (status === 'Available') {
        return 'bg-green-300'
      } else {
        return 'bg-yellow-300'
      }
    },
    fetchProperties() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Properties?fields=["name", "status", "property_type","total_units","number_of_floors"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.items = response.data.data.map((item) => ({
            name: item.name,
            type: item.property_type,
            units: item.total_units,
            floors: item.number_of_floors,
            status: item.status,
            email: item.email,
          }))
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    postData(data) {
      const postData = {
        property_name: data.propertyName,
        property_type: data.property_type,
        status: data.status,
        total_units: data.numberOfUnits,
        number_of_floors: data.numberOfFloors,
        email: data.email,
      }

      axios
        .post(
          'https://propfi-erp.enfono.com/api/resource/Properties',
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
          this.fetchProperties()
          this.$router.push('/properties')
        })
        .catch((error) => {
          console.error('Error posting data:', error)
        })
    },
    showAlert() {
      this.$swal.fire({
        title: 'Property Saved Successfully',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    },

    clearFields() {
      this.propertyName = ''
      this.propertyRate = ''
      this.numberOfUnits = ''
      this.numberOfFloors = ' '
      this.email = ''
    },
  },
}
</script>