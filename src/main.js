import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//import customFilter from './components/VuetableCustomFilter.vue'
//import customFilter from './components/SecondCustomFilter.vue'
//import customFilter from './components/FilterWithAPI.vue'

//import customFilter from './components/FilterWithFooterAPI.vue'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { ClientTable } from 'vue-tables-2';
//import {ServerTable, ClientTable, Event} from 'vue-tables-2';
//import DataTable from 'v-data-table'
//import Vuetify from 'vuetify'
//import Vuetify from 'vuetify/lib'
// To add vuetify css file
//import 'vuetify/dist/vuetify.min.css'
//Vue.use(Vuetify)
//Vue.use(ClientTable)
//Vue.use(DataTable)



Vue.use(App,axios)
Vue.config.productionTip = false

new Vue({
  //Vuetify,
 // DataTable,
  render: h => h(App)
}).$mount('#app') 