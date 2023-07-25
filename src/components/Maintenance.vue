<template>
  <div class="">
    <v-container fluid>
      <v-card v-if="items.length === 0" class="mt-3" loading>
        <v-card>Please Wait Loading...!</v-card>
      </v-card>

      <v-card v-else v-for="item in items" :key="item.id" class="mt-3">
        <div class="flex">
          <v-row>
            <v-col>
              <div class="flex">
              <v-card-title>{{ item.id }}</v-card-title
              ><span class="text-center mt-2"
                ><v-chip :color="getPriorityColor(item.priority)">{{
                  item.priority
                }}</v-chip></span
              >
            </div>

              <v-card-subtitle>{{ item.tenant }}</v-card-subtitle>
              <div class="flex align-center ml-4 my-2">
                <div class="mr-2">{{ item.property }}</div>
                &rarr;
                <div>
                  <v-list-item-subtitle> {{ item.unit }}</v-list-item-subtitle>
                </div>
              </div>
              <v-card-text>Requsted Date: {{ item.reqdate }}</v-card-text>
              <v-card-text>Maintenance Date: {{ item.maindate }}</v-card-text>
              <h2 id="status" :class="getStatusClass(item.status)">
                {{ item.status }}
              </h2>

              <v-card-actions>
                <v-btn
                  variant="outlined"
                  class="ml-2"
                  @click=";(dialogVisible = true), selectItem(item)"
                  >Change status</v-btn
                >
              </v-card-actions>
            </v-col>
            <v-col>
              <img class="mt-8 ml-28"
                style="max-width: 250px; "
                src="../assets/img/maintenance.svg"
              />
            </v-col>
          </v-row>
        </div>
      </v-card>

      <v-dialog v-model="dialogVisible" max-width="500">
        <v-card>
          <v-card-title>Change Status</v-card-title>
          <v-card-text>
            <v-select
              v-model="selectedStatus"
              :items="statusOptions"
              label="Select Status"
              item-text="name"
              item-value="name"
              return-object
              @input="$emit('update:selectedStatus', $event)"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveStatus">Save</v-btn>
            <v-btn color="error" @click="dialogVisible = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'Maintenance',
  data() {
    return {
      items: [],
      dialogVisible: false,
      selectedStatus: '',
      statusOptions: [],
      selectedItem: '',
    }
  },
  mounted() {
    setTimeout(() => {
      this.fetchMaintenance()
    }, 2000)
  },
  computed: {
    getPriorityColor() {
      return (priority) => {
        if (priority === 'High') {
          return 'red'
        } else if (priority === 'Medium') {
          return 'orange'
        } else {
          return 'green'
        }
      }
    },
  },
  methods: {
    getStatusClass(status) {
      return status === 'Fully Completed' ? 'text-success' : 'text-red'
    },
    fetchMaintenance() {
      axios
        .get(
          'https://propfi-erp.enfono.com/api/resource/Maintenance List?fields=["name","tenant","request_date","maintenance_date","property","unit","completion_status","priority"]',
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
            },
          }
        )
        .then((response) => {
          this.items = response.data.data.map((item) => ({
            id: item.name,
            tenant: item.tenant,
            reqdate: item.request_date,
            maindate: item.maintenance_date,
            property: item.property,
            unit: item.unit,
            status: item.completion_status,
            priority: item.priority,
          }))
          this.statusOptions = Array.from(
            new Set(this.items.map((item) => item.status))
          )

          console.log('Fetched res Data:', this.items)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    selectItem(item) {
      this.selectedItem = item
      console.log('selectItem is', this.selectedItem)
      this.dialogVisible = true
      console.log('SelectedStatus is ', this.selectedStatus.name)
    },
    saveStatus() {
      if (!this.selectedStatus || !this.selectedItem) {
        return
      }
      const postData = {
        completion_status: this.selectedStatus,
      }

      axios
        .put(
          `https://propfi-erp.enfono.com/api/resource/Maintenance List/${this.selectedItem.id}`,
          postData,
          {
            headers: {
              Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          this.selectedItem.status = this.selectedStatus.name
          console.log('selectedItem is : ', this.selectedItem)
          this.dialogVisible = false
          this.selectedStatus = null

          console.log('Status updated successfully:', response.data)
          Swal.fire({
            icon: 'success',
            title: 'Status Updated',
            text: 'The status has been updated successfully!',
            timer: 1500,
            showConfirmButton: false,
          })
          this.fetchMaintenance()
        })
        .catch((error) => {
          console.error('Error updating status:', error)
        })
    },
  },
}
</script>
<style scoped>
#status {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  margin-left: 1.5%;
  border: 2px solid grey;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
