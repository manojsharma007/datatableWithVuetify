<template>

<div id="demo">
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs4>
              <!-- call method searchName after leaving textfield-->
              <v-text-field
                append-icon="search"
                label="By Name"
                single-line
                hide-details
                @change="searchName"
                ></v-text-field>
            </v-flex>
        
        <v-flex xs4>
              <!-- call method searchGender after leaving textfield-->
         <v-select
            :items="items"
            label="Select Gender"
            @change="searchGender"
          ></v-select>
       
            </v-flex>

                <v-flex xs4>
              <!-- call method searchName after leaving textfield-->
              <v-text-field
                append-icon="search"
                label="Global Search"
                single-line
                hide-details
                @change="searchGlobal"
                ></v-text-field>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="employee"
        >
        <!-- <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.gender }}</td>
          <td class="text-xs-left">{{ props.item.department }}</td>
          <td class="text-xs-left">{{ props.item.city }}</td>
        </template> -->
        <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, Found no results
        </v-alert>
      </template>
      </v-data-table>
    </v-card>
  </v-app>
</div>  

</div>

</template>

<script>
import axios from "axios";
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
//Vue.use(Vuetify)
export default {
    //vuetify: new Vuetify(),
     data () {
    return { 
        items: ['Male', 'Female'],
      filterQry: {
        //you can use Object if you want to do multiple-filter
        //or you can use String if you just want to single-filter 
        qryName: "",
        qryGender:"",
        qryGlobal:""
      },
      headers: [{
        text: 'ID', value: 'id'
        },
        {
          text: 'Name', value: 'name'
        },
        {
          text: 'Gender', value: 'gender'
        },
        {
          text: 'Department', value: 'department'
        },
        {
          text: 'City', value: 'city'
        }],
      employee: []
    }
  },
     created(){
        console.log("--created item funciton--");
        axios.get("http://localhost:4000/employee")
                    .then((data) => {                       
                    this.employee=data.data;
                 }); 
  },
  methods: {
    //method to update the name query
    searchName: function (val) {
       console.log("--Search Name--");
      this.filterQry.qryName = val;
      this.filterItems("name" , val);
    },
 //method to update the gender query
    searchGender: function (val) {
       console.log("--Search Gender--");
      this.filterQry.qryGender = val;
      this.filterItems("gender" , val);
    },   
//method to global search query
    searchGlobal: function (val) {
       console.log("--Global Search--");
      this.filterQry.qryGlobal = val;
      this.filterItems("q" , val);
    },  
    //method to filter the items.
    filterItems: function(key,val) {
       console.log("--filterItems item funciton--");
      if(key=="gender"){
        axios.get("http://localhost:4000/employee?gender="+val)
                    .then((data) => {   
                      this.employee=data.data;
                 }); 
      }
      else if(key=="q"){
     axios.get("http://localhost:4000/employee?"+key+"="+val)
                    .then((data) => {   
                      this.employee=data.data;
                 }); 
      }
      else if(key=="name"){
        axios.get("http://localhost:4000/employee?"+key+"_like="+val)
                    .then((data) => {   
                      this.employee=data.data;
                 }); 
      }
      
      
     }
  }
 
}
</script>

<style>

</style>