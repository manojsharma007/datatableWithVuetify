<template>
  <div>

       <v-app id="inspire">
    <div>
      <v-tabs
        v-model="active"
        color="cyan"
        dark
        slider-color="blue"
      >
       <v-tab v-for="tab in tabs" :key="tab" @click="selected = tab;">
      {{ tab }}
    </v-tab>

        <v-tab-item
          v-for="tab in tabs" :key="tab"
        >
          <v-card flat>
            <v-card-text> <component :is="selected"></component></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    
    </div>
  </v-app>
  </div>
</template>
<script>

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
Vue.use(Vuetify,CxltToastr)
var toastrConfigs = {
    position: 'top right',
    showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)


import StaticFilterAndData from "./components/CustomFilter.vue";
import FilterDropDown from "./components/SecondCustomFilter.vue";
import GlobalFilter from "./components/VuetableCustomFilter.vue";
import FilterWithAPI from "./components/FilterWithAPI.vue";
import FilterWithFooterAPI from "./components/FilterWithFooterAPI.vue";


    export default {
     vuetify: new Vuetify({
       icons: {
       iconfont: 'mdiSvg',
    },
     }),
        name:"customeTabs",
         data:function(){
           return {
            tabs: ["StaticFilterAndData",
                   "FilterDropDown","GlobalFilter","FilterWithAPI","FilterWithFooterAPI"],
            selected: "StaticFilterAndData",
            active: null,
         // text: 'Lorem ipsum dolor sit amet, consecte',
    
            }
        },
         components: {
            StaticFilterAndData,
            FilterWithAPI,
           FilterWithFooterAPI,
            FilterDropDown,
            GlobalFilter
        },
        computed: {
            currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
            }
        }
    }
</script>

<style>
</style>
