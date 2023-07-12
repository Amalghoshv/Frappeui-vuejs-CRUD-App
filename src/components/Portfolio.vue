<template>
  <div>
    <div class="m-3">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
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
              Properties
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ numberOfProperty }}
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
              Tenants
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ numberOfTenants }}
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
              Units
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">
              {{ numberOfUnits }}
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
              stroke-width="0.1"
              stroke="blue"
              class="w-12 h-12 text-black"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.776 0.0596985C6.26469 0.298508 3.99465 1.41799 2.45532 3.17674C-0.180035 6.18766 -0.761312 10.8991 1.03941 14.6528C1.97973 16.6131 3.44153 18.0961 5.33073 19.0067C6.53682 19.5879 7.67393 19.8669 9.37954 19.9998L9.77456 20.0306L10.0313 20.424C10.5493 21.2176 11.4717 21.9416 12.3578 22.2502C13.3544 22.5971 14.7532 22.6126 15.8412 22.2888C18.1098 21.6137 19.5121 19.1904 19.101 16.6556C19.0587 16.3949 18.9632 16.0077 18.8888 15.7953C18.8143 15.5827 18.7403 15.3664 18.7243 15.3145C18.7071 15.2588 18.814 14.9702 18.985 14.6105C20.2473 11.9557 20.3373 8.72593 19.2265 5.94515C17.5823 1.82924 13.622 -0.401131 8.776 0.0596985ZM9.16706 2.61767C9.16706 3.41737 9.17869 3.53771 9.27505 3.73679C9.56829 4.34257 10.4344 4.34257 10.7276 3.73679C10.8241 3.5375 10.8356 3.41742 10.8356 2.61162V1.70952L11.1876 1.74529C14.6507 2.09735 17.2871 4.39571 18.0903 7.76302C18.2231 8.31974 18.3417 9.2086 18.343 9.65707L18.344 10.0059L17.357 10.0221C16.4513 10.0369 16.3578 10.0473 16.2229 10.1474C15.7112 10.527 15.7112 11.166 16.2229 11.5456C16.3561 11.6445 16.4533 11.6562 17.2588 11.6712L18.1477 11.6878L18.1144 11.8954C18.063 12.2172 17.6387 13.4982 17.5328 13.6517C17.5269 13.6602 17.3701 13.561 17.1844 13.4312C16.7369 13.1184 16.0686 12.8033 15.5544 12.6628C15.2012 12.5662 14.9975 12.5485 14.2248 12.5469C13.2121 12.5449 12.7451 12.6264 12.0327 12.9295C10.2067 13.7066 9.05459 15.6723 9.18364 17.7904L9.21482 18.3028H9.01762C8.90917 18.3028 8.59929 18.265 8.32893 18.2187C6.15285 17.8465 4.31021 16.6529 3.10589 14.8353C2.51325 13.9409 2.1214 12.9755 1.92733 11.9318L1.88191 11.6874L2.75732 11.6711C3.71266 11.6532 3.77461 11.6349 4.02786 11.2957C4.1786 11.0938 4.1786 10.5992 4.02786 10.3973C3.77101 10.0532 3.72241 10.0398 2.67322 10.022L1.71365 10.0058L1.73659 9.78738C1.74921 9.66729 1.77294 9.36957 1.78931 9.1258C1.82899 8.53425 1.98974 7.75911 2.20942 7.09999C3.03049 4.63613 4.79899 2.86216 7.20152 2.0926C7.69927 1.93315 8.67197 1.73465 8.9976 1.7261L9.16706 1.72167V2.61767ZM9.66241 5.0773C9.46927 5.16673 9.29611 5.35068 9.2227 5.54444C9.18656 5.63981 9.16706 6.44723 9.16706 7.84932V10.0074L7.76293 10.0228C6.43911 10.0374 6.35057 10.0444 6.21495 10.1458C5.94136 10.3502 5.85606 10.5168 5.85606 10.8465C5.85606 11.1762 5.94146 11.3429 6.21505 11.5472C6.35453 11.6513 6.42065 11.6547 8.33279 11.6547C10.2449 11.6547 10.3111 11.6513 10.4505 11.5472C10.5297 11.488 10.6429 11.3749 10.702 11.2957C10.8075 11.1544 10.8095 11.0984 10.8095 8.34367C10.8095 5.58892 10.8075 5.53292 10.702 5.39167C10.6429 5.31246 10.5332 5.20187 10.4582 5.14592C10.2854 5.01692 9.87019 4.9811 9.66241 5.0773ZM14.4677 15.199C14.5938 15.2872 14.7238 15.852 14.6741 16.0954C14.6576 16.1767 14.6084 16.6449 14.5648 17.1359C14.4654 18.2562 14.4474 18.3434 14.2936 18.4441C14.1101 18.5644 13.9315 18.4679 13.8672 18.2138C13.8397 18.105 13.7796 17.482 13.7336 16.8294C13.6615 15.8045 13.6601 15.619 13.7234 15.4675C13.8558 15.1506 14.2141 15.0213 14.4677 15.199ZM14.5045 19.2223C14.8127 19.5305 14.6085 20.0234 14.1727 20.0234C13.8833 20.0234 13.7034 19.8471 13.7034 19.5637C13.7034 19.2862 13.9008 19.0849 14.1727 19.0849C14.3131 19.0849 14.4051 19.123 14.5045 19.2223Z"
                fill="#4169E1"
              ></path>
            </svg>
          </div>
          <div>
            <div class="text-2xl ml-10 font-medium text-gray-500 truncate">
              Pending
            </div>
            <div class="m-1 ml-13 text-6xl font-semibold text-gray-900">0</div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex ml-7">
      <div class="bar  m-5 p-5 rounded-lg"><Bar class="mt-20" :data="chartData" /></div>
      <div class="bar m-5 p-10 rounded-lg">
        <Doughnut :data="computedChartData" />
      </div>
    </div>
    <div class="">
      <div class="line m-5 p-5 ml-13 rounded-lg">
        <Line :data="chartData" />
      </div>
    </div>

    <div class="m-5 rounded-lg tables">
      <h2 class="bg-white p-2 text-h6 text-center">Tenant Details</h2>
      <hr>
      <v-table fixed-header height="320px">
        <thead>
          <tr>
            <th class="text-center">Name</th>
            <th class="text-center">Unit</th>
            <th class="text-center">Rent start Date</th>
            <th class="text-center">Rent end Date</th>
            <th class="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tenant in tenantData" :key="tenant.name">
            <td class="text-center">{{ tenant.name }}</td>
            <td class="text-center">{{ tenant.unit }}</td>
            <td class="text-center">{{ tenant.rent_start_date }}</td>
            <td class="text-center">{{ tenant.rent_end_date }}</td>
            <td class="text-center">{{ tenant.agreement_current_status }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
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
import axios from 'axios'
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
  name: 'BarChart',
  components: { Bar, Doughnut, Line },
  data() {
    return {
      numberOfUnits: 0,
      numberOfTenants: 0,
      numberOfProperty: 0,
      tableData: [],
      tenantData:[],

      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#0077c0',
            data: [40, 20, 12],
          },
        ],
      },
      chartDataall: {
        labels: ['Properties', 'Units', 'Tenant'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor:['#99FFFF', '#00308F', '#89CFF0'],
            data: [],
          },
        ],
      },
    }
  },
  mounted() {
    this.fetchUnit()
    this.fetchTenant()
    this.fetchProperties()
  },
  computed: {
    computedChartData() {
      const updatedData = [
        this.numberOfProperty,
        this.numberOfUnits,
        this.numberOfTenants,
      ]

      return {
        ...this.chartDataall,
        datasets: [
          {
            ...this.chartDataall.datasets[0],
            data: updatedData,
          },
        ],
      }
    },
  },
  methods: {
    fetchProperties() {
      axios
        .get('https://propfi-erp.enfono.com/api/resource/Properties', {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
          },
        })
        .then((response) => {
          this.properties = response.data.data
          this.numberOfProperty = this.properties.length

          console.log('number of Properties is:', this.numberOfProperty)
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    fetchUnit() {
      axios
        .get('https://propfi-erp.enfono.com/api/resource/Unit', {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
          },
        })
        .then((response) => {
          this.units = response.data.data
          this.numberOfUnits = this.units.length

          console.log('number of Units is:', this.numberOfUnits)
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          console.log('Error response:', error.response)
          console.log('Error message:', error.message)
        })
    },
    fetchTenant() {
      axios
        .get('https://propfi-erp.enfono.com/api/resource/Tenant?fields=["name", "agreement_current_status", "rent_start_date","rent_end_date","unit"]', {
          headers: {
            Authorization: 'token 2e83ad6ac981c0e:6d9c75d97aee1c7',
          },
        })
        .then((response) => {
          const tenant = response.data.data;
          this.tenants = response.data.data
          this.numberOfTenants = this.tenants.length
          this.tenantData = response.data.data;

      this.tenantData = Array.from(this.tenantData);
          console.log("tenantdata is ",this.tenantData);

          console.log('number of Tenants is:', this.numberOfTenants)
          console.log(response.data)
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
