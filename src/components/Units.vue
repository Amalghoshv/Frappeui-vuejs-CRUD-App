<template>
  <div>
    <v-container class="border border-red-400 mx-4 mt-2 rounded-lg topdiv">
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <span class="text">Unit List</span>
        </v-col>
        <v-col cols="auto">
          <v-btn class="bg-info" @click="openDialog()">Add Units</v-btn>
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
        <v-card-title class="headline">Add Units</v-card-title>
        <v-card-text>
          <v-form @submit="saveUnit">
            <v-text-field v-model="unitName" label="Unit Name"></v-text-field>
            <v-select
            outlined
            :items="propertyNames"
              v-model="propertyName"
              label="Property Name"
            ></v-select>
            <v-select
              outlined
              :items="unitTypes"
              v-model="unitType"
              label="Unit Type"
            ></v-select>
            <v-text-field v-model="rate" label="Rate"></v-text-field>
            <v-select :items="floors" v-model="floor" label="Floor"></v-select>
            <v-select
              :items="unitstatuses"
              v-model="unitstatus"
              label="Status"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveUnit(),showAlert()">Save</v-btn>
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
          lg="3"
          xl="3"
        >
        <router-link :to="{ name: 'unitsView', params: { itemName: item.name }}"> <v-card
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
                src="https://img.freepik.com/free-vector/home-interior-wallpaper-theme_52683-44903.jpg?w=740&t=st=1688626222~exp=1688626822~hmac=af92dea195b3ef18aea3e37b71a5dadf82c36a32196c5887df8407b0afd568b3"
              ></v-img>
              <span :class="getStatusClass(item.status)" class="imgspan">{{
                item.status
              }}</span>
            </div>
            <v-card-item>
              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-subtitle>
                <span class="me-1">{{ item.property }}</span>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <div class="flex justify-between">
                <div class="my-4 text-subtitle-1 text-h1">
                  {{ item.type }}
                </div>
                <div class="my-2 text-subtitle-1 price">
                  &#8377; {{ item.amount }}
                </div>
              </div>
              <div class="my-4 text-subtitle-1">Floor : {{ item.floors }}</div>

              <!-- <div>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div> -->
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
              <v-btn color="deep-purple-lighten-2 more" variant="text">
                More
              </v-btn>
            </v-card-actions>
          </v-card></router-link> 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


  <style>
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@300&family=Maven+Pro:wght@400;500&family=Poppins:wght@400;700&family=Sen&display=swap');

.price {
  background-color: cornflowerblue;
  display: inline-block;
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


  <script>
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
export default {
  name: 'properties',
  data() {
    return {
      unitTypes: ['DELUX', 'Store'],
      unitType:'',
      floors: ['Ground Floor', 'First Floor', 'Third Floor', 'Fourth Floor'],
      floor:'',
      unitstatuses: ['Available', 'Booked', 'Leased'],
      unitstatus:'',
      dialogVisible: false,
      unitName: '',
      rate: '',
      propertyNames: [],
      propertyName:'',
      loading: false,
      items: [],
    }
  },
  mounted() {
    this.fetchProperties()
  },

  methods: {
    openDialog() {
      this.dialogVisible = true
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
          'https://propfi-erp.enfono.com/api/resource/Unit?fields=["name","property","rent_amount","status", "unit_type","floor"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.items = response.data.data.map((item) => ({
            name: item.name,
            property: item.property,
            type: item.unit_type,
            floors: item.floor,
            status: item.status,
            amount: item.rent_amount,
          }))
          this.propertyNames = Array.from(new Set(this.items.map((item) => item.property)));
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
        name:data.unitName,
        property: data.propertyName,
        unit_type: data.unitType,
        status: data.status,
        rent_amount:data.rate,
        floor: data.floor,
      }

      axios
        .post('https://propfi-erp.enfono.com/api/resource/Unit', postData, {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('Data successfully posted:', response.data)
          this.fetchProperties();
          this.$router.push('/units');
        })
        .catch((error) => {
          console.error('Error posting data:', error)
        })
    },

    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
      
    },
    saveUnit() {
      // Get the values from the input fields
      const unitData = {
        unitName: this.unitName,
        propertyName: this.propertyName,
        unitType: this.unitType,
        rate: this.rate,
        floor: this.floor,
        unitstatus: this.unitstatus,
      }
      console.log('unitData is :', unitData)
      this.fetchProperties()
      this.$router.push('/units');
      // Call the postData method to post the data
      this.postData(unitData)
      this.closeDialog()
    },
    clearFields() {
      this.unitName = '';
      this.rate = '';
      this.unitstatus = '';
      this.unittype = '';
      this.floor = ' ';
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
  });
},
  },
}
</script>
