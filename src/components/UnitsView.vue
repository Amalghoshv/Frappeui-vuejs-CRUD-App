<template>
  <div>
    <div class="m-3">
      <router-link to="/units">&larr; Back to Unit List</router-link>
    </div>

    <div class="p-3 bg-white m-4 headdiv d-flex justify-end">
      <div class="me-auto pa-2 flex">
        <h3 class="bg-white font-italic">Unit Details</h3>
        &nbsp;<span>&#8614;</span>&nbsp;
        <h4 class="text-blue">{{ unitName }}</h4>
      </div>
      <div class="mx-2">
        <v-btn class="mx-2" @click="openDialog()" icon
          ><font-awesome-icon :icon="['fas', 'pen']"
        /></v-btn>
        <v-btn @click="deleteUnit(),showAlertD()" icon
          ><font-awesome-icon :icon="['fas', 'trash-alt']"
        /></v-btn>
      </div>
    </div>
    <v-dialog
      v-model="dialogVisible"
      persistent
      max-width="600px"
      max-height="600px"
    >
      <v-card>
        <v-card-title class="headline">Update Unit</v-card-title>
        <v-card-text>
          <v-form @submit="saveUnit()">
            <v-text-field v-model="unitName" label="Unit Name"></v-text-field>
            <v-select
              outlined
              :items="unitProperties"
              v-model="unitProperty"
              label="Unit Property"
            ></v-select>
            <v-select
              outlined
              :items="utype"
              v-model="unitType"
              label="Unit Type"
            ></v-select>
            <v-text-field v-model="unitRate" label="Rate"></v-text-field>
            <v-select
              :items="drops"
              v-model="unitStatus"
              label="Status"
            ></v-select>
            <v-select
            :items="floors"
              v-model="unitFloors"
              label="Floor"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveUnit(),showAlertU()">Update</v-btn>
          <v-btn color="secondary" @click="closeDialog()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="d-flex bg-white m-4 headdiv justify-space-evenly">
      <div class="d-flex justify-start">
        <img
          class="m-5"
          src="https://img.freepik.com/free-vector/home-interior-wallpaper-theme_52683-44903.jpg?w=740&t=st=1688626222~exp=1688626822~hmac=af92dea195b3ef18aea3e37b71a5dadf82c36a32196c5887df8407b0afd568b3"
          alt=""
        />

        <div class="m-5">
          <h1 class="ml-2 text-h5">{{ unitName }}</h1>
          <h2 class="ml-3 text-h6 border-yellow-500">{{ unitProperty }}</h2>

          <v-chip
            class="text-subtitle-2"
            color="orange"
            text-color="white"
            append-icon="mdi-star"
            >{{ unitType }}
          </v-chip>
          <v-chip color="green" class="ml-2">{{ unitStatus }}</v-chip>

          <h5>Floors :{{ unitFloors }}</h5>
          <h5>Rate:{{ unitRate }}</h5>
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
      unitProperty: '',
      unitProperties: [],
      unitType: '',
      unitFloors: '',
      unitStatus: '',
      drops: ['Available', 'Leased'],
      utype: ['Store', 'DELUX'],
      dialogVisible: false,
      unitName: '',
      unitRate: '',
      floors:['Ground Floor','First Floor','Third Floor','Fourth Floor'],
      status: '',
      loading: false,
      items: [],
      itemName: '',
    }
  },
  beforeRouteEnter(to, from, next) {
    const itemName = to.params.itemName
    console.log('item name is:', itemName)
    next((vm) => {
      vm.itemName = itemName
      vm.fetchUnitData()
    })
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    fetchUnitData() {
      axios
        .get(
          `https://propfi-erp.enfono.com/api/resource/Unit/${this.itemName}`,
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          const unitData = response.data.data
          this.setunitProperty(unitData.property)
          this.setunitName(unitData.name)
          this.setunitType(unitData.unit_type)
          this.setunitFloors(unitData.floor)
          this.setunitStatus(unitData.status)
          this.setunitRate(unitData.rent_amount)
         
        })
        .catch((error) => {
          console.log('unit response error', error)
        })
    },

  
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
      this.clearFields()
    },

    clearFields() {
      this.unitName = ''
      this.unitRate = ''
      this.unitFloors = ' '
    },
    setunitProperty(property) {
      this.unitProperty = property
    },
    setunitName(name) {
      this.unitName = name
    },
    setunitType(type) {
      this.unitType = type
    },

    setunitFloors(floor) {
      this.unitFloors = floor
    },
    setunitStatus(status) {
      this.unitStatus = status
    },
    setunitRate(rate) {
      this.unitRate = rate
    },
    showAlertD() {
  this.$swal.fire({
    title: 'Unit Deleted Successfully',
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
    title: 'Unit Updated Successfully',
    icon: 'success',
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
},
   
    deleteUnit(){
      axios.delete(`https://propfi-erp.enfono.com/api/resource/Unit/${this.itemName}`,
      
      {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }).then((response) => {
        console.log('Unit successfully deleted');
        this.$router.push('/units');
        
       
      })
      .catch((error) => {
        console.error('Error deleting unit:', error);
      });
  

    },

    editData(data) {
      const {
        unitName,
        unitProperty,
        unitType,
        unitFloors,
        unitStatus,
        unitRate
      } = this
      const editData = {
        name: unitName,
        unit_type: unitType,
        floor: unitFloors,
        status: unitStatus,
        rent_amount:unitRate,
        property:unitProperty
      }

      axios
        .put(
          `https://propfi-erp.enfono.com/api/resource/Unit/${this.itemName}`,
          editData,
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          console.log('Data successfully updated:', response.data.data)
          this.fetchUnitData();
          this.$router.push('/units');
          
        })
        .catch((error) => {
          console.error('Error updating data:', error)
        })
    },
    saveUnit() {
      const unitData = {
        name: this.unitName,
        unitProperty:this.unitProperty,
        unit_type: this.unitType,
        floor: this.floor,
        status: this.status,
        rate:this.rate

      }
      console.log('UnitData is:', unitData)
      // Call the postData method to update the data
      this.editData(unitData)
      this.$router.push('/units')
      this.closeDialog()
    },
  },
}
</script>