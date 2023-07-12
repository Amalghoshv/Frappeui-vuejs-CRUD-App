    <template>
  <div>
    <div class="m-3">
      <router-link to="/properties">&larr; Back to Property List</router-link>
    </div>

    <div class="p-3 bg-white m-4 headdiv d-flex justify-end">
      <div class="me-auto pa-2 flex">
        <h3 class="bg-white font-italic">Property Details</h3>
        &nbsp;<span>&#8614;</span>&nbsp;
        <h4 class="text-blue">{{ propertyName }}</h4>
      </div>
      <div class="mx-2">
        <v-btn class="mx-2" @click="openDialog()" icon
          ><font-awesome-icon :icon="['fas', 'pen']"
        /></v-btn>
        <v-btn @click="deleteProperty(),showAlertD()" icon><font-awesome-icon :icon="['fas', 'trash-alt']" /></v-btn>
      </div>
    </div>

    <v-dialog
      v-model="dialogVisible"
      persistent
      max-width="600px"
      max-height="600px"
    >
      <v-card>
        <v-card-title class="headline">Update Property</v-card-title>
        <v-card-text>
          <v-form @submit="saveProperty">
            <v-text-field
              v-model="propertyName"
              label="Property Name"
            ></v-text-field>
            <v-select
              :items="ptype"
              v-model="propertyType"
              label="Property Type"
            ></v-select>
            <v-text-field v-model="propertyEmail" label="Email"></v-text-field>
            <v-select
              :items="drops"
              v-model="propertyStatus"
              label="Status"
            ></v-select>
            <v-text-field
              v-model="propertyUnits"
              label="Number of Units"
            ></v-text-field>
            <v-text-field
              v-model="propertyFloors"
              label="Number of Floors"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveProperty(),showAlertU()">Update</v-btn>
          <v-btn color="secondary" @click="closeDialog()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="d-flex bg-white m-4 headdiv justify-space-evenly">
      <div class="d-flex justify-start">
        <img
          class="m-5"
          src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
          alt=""
        />

        <div class="m-5">
          <h1 class="ml-2 text-h6">{{ propertyName }}</h1>

          <v-chip
            class="text-subtitle-2"
            color="orange"
            text-color="white"
            append-icon="mdi-star"
            >{{ propertyType }}
          </v-chip>
          <v-chip color="green" class="ml-2">{{ propertyStatus }}</v-chip>
          <h5>Floors :{{ propertyFloors }}</h5>
          <h5>Units{{ propertyUnits }}</h5>
          <h5>Email:{{ propertyEmail }}</h5>
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

import 'vuetify/dist/vuetify.css'
import axios from 'axios'
export default {
  data() {
    return {
      
      propertyType: '',
      propertyFloors: '',
      propertyStatus: '',
      propertyUnits: '',
      propertyEmail: '',
      drops: ['Available', 'Not Available'],
      ptype: ['Commercial', 'HOTEL'],
      dialogVisible: false,
      propertyName: '',
      propertyRate: '',
      
      numberOfUnits: '',
      numberOfFloors: '',
      email: '',
      status: '',
      loading: false,
      items: [],
      itemName:''
    }
  },
  beforeRouteEnter(to, from, next) {
    const itemName = to.params.itemName
    console.log('item name is:', itemName)
    next((vm) => {
      vm.itemName = itemName 
      vm.fetchPropertyData();
    })
    
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    fetchPropertyData() {
    axios
      .get(`https://propfi-erp.enfono.com/api/resource/Properties/${this.itemName}`, {
        headers: {
          Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
        },
      })
      .then(response => {
        const propertyData = response.data.data;
        this.setPropertyName(propertyData.name);
        this.setPropertyType(propertyData.property_type);
        this.setPropertyUnits(propertyData.total_units);
        this.setPropertyFloors(propertyData.number_of_floors);
        this.setPropertyStatus(propertyData.status);
        this.setPropertyEmail(propertyData.email);
      })
      .catch(error => {
        console.log('Property response error', error);
      });
  },
    
    // viewapi(){
        
    //     const appi=`https://propfi-erp.enfono.com/api/resource/Properties/${this.itemName}`
    //   console.log("The api is ",appi)
    // },
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
    },

    clearFields() {
      this.propertyName = ''
      this.propertyRate = ''
      this.numberOfUnits = ''
      this.numberOfFloors = ' '
      this.email = ''
    },
    setPropertyName(name) {
      this.propertyName = name
    },
    setPropertyType(type) {
      this.propertyType = type
    },
    setPropertyUnits(units) {
      this.propertyUnits = units
    },
    setPropertyFloors(floors) {
      this.propertyFloors = floors
    },
    setPropertyStatus(status) {
      this.propertyStatus = status
    },
    setPropertyEmail(email) {
      this.propertyEmail = email
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
  });
},
showAlertU() {
  this.$swal.fire({
    title: 'Property Updated Successfully',
    icon: 'success',
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
},
    editData(data) {
        const { propertyName, propertyType, propertyFloors, propertyStatus, propertyUnits, propertyEmail } = this
      const editData = {
        property_name: propertyName,
        property_type: propertyType,
        status: propertyStatus,
        total_units: propertyUnits,
        number_of_floors: propertyFloors,
        email: propertyEmail,
      }
      

      axios
        .put(
          `https://propfi-erp.enfono.com/api/resource/Properties/${this.itemName}`,editData,
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          console.log('Data successfully updated:', response.data.data)
        })
        .catch((error) => {
          console.error('Error updating data:', error)
        })
    },
    deleteProperty(){
      axios.delete(`https://propfi-erp.enfono.com/api/resource/Properties/${this.itemName}`,
      
      {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }).then((response) => {
        console.log('Property successfully deleted');
        this.$router.push('/properties');
       
      })
      .catch((error) => {
        console.error('Error deleting property:', error);
      });
  

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
    console.log('propertyData is:', propertyData)
    // Call the postData method to update the data
    this.editData(propertyData)
    this.closeDialog()
  },
  },

  
}
</script>