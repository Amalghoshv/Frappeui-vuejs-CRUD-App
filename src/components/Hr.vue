<template>
  <div>
    <div class="m-3">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div
          class="w-51 px-4 py-4 bg-white rounded-lg flex border border-blue-500"
        >
          <div class="pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="white"
              class="w-12 h-12 text-black"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4375 1.39094V2.78191L3.52539 2.76145C3.57371 2.7502 4.59324 2.57844 5.79102 2.37973L7.96875 2.01852V1.00926V0H5.70312H3.4375V1.39094ZM5.6543 3.58469L2.03125 4.19242V11.5103V18.8281H1.01562H0V19.4141V20H10H20V19.4141V18.8281H18.9844H17.9688V12.2656V5.70312H14.2773H10.5859V12.2656V18.8281H10H9.41406V10.8984C9.41406 3.37086 9.41059 2.96895 9.3457 2.97281C9.30809 2.97508 7.64699 3.25039 5.6543 3.58469ZM7.77344 5.11719V5.70312H7.14844H6.52344V5.11719V4.53125H7.14844H7.77344V5.11719ZM4.91316 7.97852L4.92395 8.55469H4.29793H3.67188V7.96777V7.38082L4.28711 7.3916L4.90234 7.40234L4.91316 7.97852ZM7.76473 7.97852L7.77551 8.55469H7.14949H6.52344V7.96777V7.38082L7.13867 7.3916L7.75391 7.40234L7.76473 7.97852ZM13.4766 7.96875V8.55469H12.8516H12.2266V7.9948C12.2266 7.68684 12.2383 7.42316 12.2526 7.40887C12.2669 7.39453 12.5482 7.38281 12.8776 7.38281H13.4766V7.96875ZM16.3281 7.96875V8.55469H15.7031H15.0781V7.9948C15.0781 7.68684 15.0898 7.42316 15.1042 7.40887C15.1185 7.39453 15.3997 7.38281 15.7292 7.38281H16.3281V7.96875ZM4.91316 10.8496L4.90234 11.4258L4.28711 11.4365L3.67188 11.4473V10.8604V10.2734H4.29793H4.92395L4.91316 10.8496ZM7.76473 10.8496L7.75391 11.4258L7.13867 11.4365L6.52344 11.4473V10.8604V10.2734H7.14949H7.77551L7.76473 10.8496ZM13.4766 10.8604V11.4473L12.8613 11.4365L12.2461 11.4258L12.2353 10.8496L12.2245 10.2734H12.8505H13.4766V10.8604ZM16.3281 10.8604V11.4473L15.7129 11.4365L15.0977 11.4258L15.0868 10.8496L15.0761 10.2734H15.7021H16.3281V10.8604ZM4.91316 13.7012L4.90234 14.2773L4.28711 14.2881L3.67188 14.2989V13.7119V13.125H4.29793H4.92395L4.91316 13.7012ZM7.77344 13.7109V14.2969H7.14844H6.52344V13.7109V13.125H7.14844H7.77344V13.7109ZM13.4766 13.7109V14.2969H12.8516H12.2266V13.7109V13.125H12.8516H13.4766V13.7109ZM16.3281 13.7119V14.2989L15.7129 14.2881L15.0977 14.2773L15.0868 13.7012L15.0761 13.125H15.7021H16.3281V13.7119ZM7.73438 17.4023V18.8281H7.14844H6.5625V17.9883V17.1484H5.72266H4.88281V17.9883V18.8281H4.29688H3.71094V17.4023V15.9766H5.72266H7.73438V17.4023ZM13.4766 16.5625V17.1484H12.8516H12.2266V16.5625V15.9766H12.8516H13.4766V16.5625ZM16.3281 16.5625V17.1484H15.7031H15.0781V16.5625V15.9766H15.7031H16.3281V16.5625Z"
                fill="#4169E1"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-2xl ml-10 font-medium text-gray-500 truncate">
              Total Employees
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ totalEmployees }}
            </div>
          </div>
        </div>
        <div
          class="w-51 px-4 py-5 bg-white rounded-lg shadow flex border border-blue-500"
        >
          <div class="pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="blue"
              class="w-12 h-12text-blue"
            >
              <path
                d="M9.34933 15.3577C5.38553 15.3577 2 15.97 2 18.4174C2 20.8666 5.364 21.5 9.34933 21.5C13.3131 21.5 16.6987 20.8877 16.6987 18.4404C16.6987 15.9911 13.3347 15.3577 9.34933 15.3577Z"
                fill="#3A57E8"
              ></path>
              <path
                opacity="0.4"
                d="M9.34935 13.0248C12.049 13.0248 14.2124 10.9062 14.2124 8.26241C14.2124 5.61865 12.049 3.5 9.34935 3.5C6.65072 3.5 4.48633 5.61865 4.48633 8.26241C4.48633 10.9062 6.65072 13.0248 9.34935 13.0248"
                fill="#3A57E8"
              ></path>
              <path
                opacity="0.4"
                d="M16.1728 8.34873C16.1728 9.69505 15.7599 10.9513 15.0358 11.9948C14.9605 12.1021 15.027 12.2468 15.1581 12.2698C15.3401 12.2995 15.527 12.3177 15.7178 12.3216C17.616 12.3704 19.3196 11.1736 19.7902 9.37116C20.4879 6.69674 18.4409 4.29541 15.8333 4.29541C15.5505 4.29541 15.2794 4.32416 15.0153 4.37686C14.9791 4.38453 14.9399 4.40177 14.9203 4.43244C14.8949 4.47172 14.9135 4.52251 14.9389 4.55605C15.7227 5.63214 16.1728 6.94205 16.1728 8.34873Z"
                fill="#3A57E8"
              ></path>
              <path
                d="M21.7785 15.6694C21.4311 14.944 20.5926 14.4467 19.3166 14.2023C18.7149 14.0586 17.0847 13.8545 15.5691 13.8832C15.5465 13.8861 15.5338 13.9014 15.5319 13.911C15.5289 13.9263 15.5358 13.9493 15.5651 13.9656C16.2657 14.3049 18.9732 15.7805 18.6327 18.8929C18.618 19.0289 18.7286 19.1439 18.8665 19.1248C19.5329 19.0318 21.2472 18.6706 21.7785 17.5475C22.073 16.9534 22.073 16.2635 21.7785 15.6694Z"
                fill="#3A57E8"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-2xl ml-10 font-medium text-gray-500 truncate">
              New Hires (This Year)
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ newEmployees }}
            </div>
          </div>
        </div>
        <div
          class="w-51 px-4 py-5 bg-white rounded-lg shadow flex border border-blue-500"
        >
          <div class="pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.3"
              stroke="blue"
              class="w-12 h-12 text-black"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.63364 1.08021C6.54805 1.13931 5.273 2.15886 3.80014 3.34594C1.82865 4.9349 1.10562 5.53926 1.05925 5.63696C1.00246 5.75664 0.996285 6.21355 0.996363 10.2949C0.996402 15.3445 0.976754 14.9877 1.26573 15.1807L1.39846 15.2694L3.43366 15.2692C5.38206 15.2691 5.47417 15.2658 5.5937 15.193C5.86385 15.0283 5.85733 15.0704 5.87928 13.3377C5.90107 11.6153 5.89768 11.6398 6.15568 11.346C6.51716 10.9343 7.07851 10.8366 7.53616 11.1059C7.73557 11.2232 7.83897 11.3348 7.95541 11.5585C8.04584 11.7322 8.04717 11.7527 8.06646 13.2968C8.08549 14.8174 8.08826 14.8629 8.17119 14.996C8.34857 15.2806 8.25095 15.2694 10.5447 15.2694H12.6006L12.7591 15.1216C12.8767 15.0119 12.9262 14.9289 12.9512 14.7994C13.0014 14.5388 12.9977 6.02074 12.9472 5.78535C12.9176 5.64707 12.8662 5.55586 12.7617 5.45598C12.5262 5.23091 7.37566 1.09837 7.24902 1.03286C7.06273 0.936499 6.81399 0.955639 6.63364 1.08021ZM10.6909 1.052C10.6197 1.09544 10.4222 1.24614 10.252 1.38688L9.94264 1.64285L11.7355 3.08536C12.7215 3.87875 13.6081 4.61666 13.7057 4.72521C13.9188 4.96224 14.0588 5.24556 14.1194 5.56254C14.1715 5.83543 14.157 14.9806 14.1042 15.162L14.0729 15.2694L15.3176 15.2692C16.4908 15.2691 16.5697 15.2646 16.6897 15.1915C16.7597 15.1488 16.8519 15.0566 16.8946 14.9865C16.9709 14.8614 16.9723 14.7806 16.9723 10.289C16.9723 5.89535 16.9694 5.71418 16.8993 5.59914C16.8306 5.48645 11.614 1.24895 11.3125 1.06087C11.1314 0.947983 10.8677 0.944233 10.6909 1.052ZM14.6994 1.0613C14.5047 1.17911 13.9667 1.61117 13.9765 1.64195C13.9808 1.65555 14.7665 2.29487 15.7226 3.06271C16.6786 3.83054 17.5453 4.54014 17.6486 4.63955C17.8826 4.86494 18.0943 5.28177 18.1469 5.62114C18.2051 5.99711 18.1769 14.974 18.1169 15.1424L18.0717 15.2694H19.3327C20.5787 15.2694 20.5953 15.2683 20.7265 15.1807C21.0154 14.9877 20.9958 15.3445 20.9958 10.2949C20.9959 6.21355 20.9897 5.75664 20.9329 5.63696C20.8866 5.53926 20.1635 4.9349 18.1921 3.34594C16.7192 2.15886 15.4441 1.13931 15.3585 1.08021C15.1593 0.942592 14.9077 0.935366 14.6994 1.0613Z"
                fill="#4169E1"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-2xl ml-10 font-medium text-gray-500 truncate">
              Employee Exits(This Year)
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ exitEmployees }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" ">
      <v-container>
        <v-row>
          <v-col>
            <div class="v-col-auto chartsstyle rounded-lg">
              <div>
                <h1 class="text-h5">Gender Diversity</h1>
                <p class=" text-grey">Last synced just now</p>
                <Pie  class="p-7" :data="chartData" />
              </div></div
          ></v-col>
          <v-col>
            <div class="v-col-auto chartsstyle rounded-lg">
              <div><h2 class="text-h5">Employees by Type</h2></div>
              <p class=" text-grey">Last synced just now</p>
              <Doughnut class="p-7"  :data="chartDataemp"/>
            </div></v-col
          >
        </v-row>
        <v-row>
          <v-col>
            <div class="v-col-auto chartsstyle rounded-lg p-5">
              <div >
                <h1 class="text-h5">Designation Wise Employee Count</h1>
                <p class=" text-grey">Last synced just now</p>
                <Pie class="p-7"  :data="chartDatadesg" />
              </div></div
          ></v-col>
          <v-col>
            <div class="v-col-auto chartsstyle rounded-lg">
              <div><h2 class="text-h5">Department Wise Employee Count</h2></div>
              <p class=" text-grey">Last synced just now</p>
              <Doughnut class="p-7"  :data="chartDataemp"/>
            </div></v-col
          >
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { Bar, Doughnut, Line, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  LineElement,
  PointElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
)
export default {
  name: 'HR',

  data() {
    return {
      employees: '',
      totalEmployees: '',
      newEmployees: '',
      exitEmployees: '',
      loaded: false,
      chartdata:'',
      chartdataemp:'',
      chartdatadesg:'',
      chartDatadep:''

      
    }
  },
  computed: {
    genderDistribution() {
      const genderData = {
        male: 0,
        female: 0,
        other: 0,
      };

      if (this.chartdata && Array.isArray(this.chartdata)) {
        this.chartdata.forEach((employee) => {
          if (employee.gender === "Male") {
            genderData.male++;
          } else if (employee.gender === "Female") {
            genderData.female++;
          } else {
            genderData.other++;
          }
        });
      }

      return genderData;
    },
    chartData() {
      return {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            data: [
              this.genderDistribution.male,
              this.genderDistribution.female,
              this.genderDistribution.other,
            ],
            backgroundColor: ["#224C98", "#1ca9c9", "#7B68EE"],
          },
        ],
      };
    },
    employeeType(){
      const empData = {
        intern: 0,
        fulltime: 0,
        other: 0,
      };

      if (this.chartdataemp && Array.isArray(this.chartdataemp)) {
        this.chartdataemp.forEach((employee) => {
          if (employee.employment_type === "Intern") {
            empData.intern++;
          } else if (employee.employment_type  === "Full-time") {
            empData.fulltime++;
          } else {
            empData.other++;
          }
        });
      }

      return empData;
    },
    chartDataemp() {
      return {
        labels: ["Intern", "Full-time"],
        datasets: [
          {
            data: [
              this.employeeType.intern,
              this.employeeType.fulltime,
              
            ],
            backgroundColor: ["#6050DC", "#0093AF"],
          },
        ],
      };
    },
    employeeDesg(){
      const empData = {
        ceo: 0,
        hr: 0,
        sd: 0,
      };

      if (this.chartdatadesg && Array.isArray(this.chartdatadesg)) {
        this.chartdatadesg.forEach((employee) => {
          if (employee.designation === "Chief Executive Officer") {
            empData.ceo++;
          } else if (employee.designation  === "HR Manager") {
            empData.hr++;
          } else {
            empData.sd++;
          }
        });
      }

      return empData;
    },
    chartDatadesg() {
      return {
        labels: ["Chief Executive Officer","HR Manager", "Software Developer"],
        datasets: [
          {
            data: [
              this.employeeDesg.ceo,
              this.employeeDesg.hr,
              this.employeeDesg.sd,
              
            ],
            backgroundColor: ["#6050DC", "#5F9EA0","#15f4ee"],
          },
        ],
      };
    },
    employeeDep(){
      const empData = {
        research: 0,
        operations: 0,
        sd: 0,
      };

      if (this.chartdatadep && Array.isArray(this.chartdatadep)) {
        this.chartdatadep.forEach((employee) => {
          if (employee.department === "Research & Development") {
            empData.research++;
          } else if (employee.department === "Operations") {
            empData.operations++;
          } else {
            empData.sd++;
          }
        });
      }

      return empData;
    },
    chartDatadep() {
      return {
        labels: ["Chief Executive Officer","HR Manager", "Software Developer"],
        datasets: [
          {
            data: [
              this.employeeDep.research,
              this.employeeDep.operations,
              this.employeeDep.sd,
              
            ],
            backgroundColor: ["#6050DC", "#0093AF","#7B68EE"],
          },
        ],
      };
    }
  },
  components: { Bar, Doughnut, Line, Pie },
  mounted() {
    this.totalEmployeeCount()
    this.newEmployeeCount()
    this.exitEmployeeCount()
    this.genderCount()
    this.empTypeCount()
    this.empDesgCount()
    this.employeeDataDep()
  },

  methods: {
    genderCount() {
      axios
        .get('https://hrmdemo.enfono.com/api/resource/Employee?fields=["gender"]', {
          headers: {
            Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
          },
        })
        .then((response) => {
          this.chartdata = response.data.data
          console.log("chartdata is ",this.chartdata)
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    empTypeCount() {
      axios
        .get('https://hrmdemo.enfono.com/api/resource/Employee?fields=["employment_type"]', {
          headers: {
            Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
          },
        })
        .then((response) => {
          this.chartdataemp = response.data.data
          console.log("chartdata is ",this.chartdataemp)
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    empDesgCount() {
      axios
        .get('https://hrmdemo.enfono.com/api/resource/Employee?fields=["designation"]', {
          headers: {
            Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
          },
        })
        .then((response) => {
          this.chartdatadesg = response.data.data
          
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    employeeDataDep() {
      axios
        .get('https://hrmdemo.enfono.com/api/resource/Employee?fields=["department"]', {
          headers: {
            Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
          },
        })
        .then((response) => {
          this.chartdatadep = response.data.data
          
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    totalEmployeeCount() {
      axios
        .get('https://hrmdemo.enfono.com/api/resource/Employee', {
          headers: {
            Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
          },
        })
        .then((response) => {
          this.employees = response.data.data
          this.totalEmployees = this.employees.length
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },

    newEmployeeCount() {
      axios
        .get(
          'https://hrmdemo.enfono.com/api/resource/Employee?filters=[["date_of_joining", ">=", "2023-01-01"]]',
          {
            headers: {
              Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
            },
          }
        )
        .then((response) => {
          this.employees = response.data.data
          this.newEmployees = this.employees.length
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    exitEmployeeCount() {
      axios
        .get(
          'https://hrmdemo.enfono.com/api/resource/Employee?filters=[["relieving_date", ">=", "2023-01-01"]]',
          {
            headers: {
              Authorization: 'token 01fa19931f43b6c:4d6d848f4be76b2',
            },
          }
        )
        .then((response) => {
          this.employees = response.data.data
          this.exitEmployees = this.employees.length
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    
  },
}
</script>
<style scoped>
.chartsstyle {
 
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>