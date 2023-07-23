import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'vuetify/styles/main.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

const vuetify = createVuetify({
 
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
})

import { setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

setConfig('resourceFetcher', frappeRequest)

const app = createApp(App)

app.use(router)
app.component('VueDatePicker', VueDatePicker);
app.use(VCalendar, {})
app.use(resourcesPlugin)
app.use(VueSweetalert2)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.mount('#app')
