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
                label="Name"
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

          </v-layout>
        </v-container>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        >
        
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
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Vue.use(Vuetify)
export default {
    //vuetify: new Vuetify(),
     data () {
    return { 
        items: ['Male', 'Female'],
      filterQry: {
        //you can use Object if you want to do multiple-filter
        //or you can use String if you just want to single-filter 
        qryName: "",
        qryGender:""
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
      employee: [{
        "id": 1,
        "name": "Silvanus J.",
        "gender": "Male",
        "department": "Training",
        "city": "Zhouzhuang"
      }, {
        "id": 2,
        "name": "Silvanus M.",
        "gender": "Male",
        "department": "Engineering",
        "city": "Wotsogo"
      }, {
        "id": 3,
        "name": "Elbertina",
        "gender": "Female",
        "department": "Training",
        "city": "Zhangjiachang"
      }, {
        "id": 4,
        "name": "Kennan",
        "gender": "Male",
        "department": "Human Resources",
        "city": "Miedzichowo"
      }, {
        "id": 5,
        "name": "Kurt",
        "gender": "Male",
        "department": "Training",
        "city": "Cascavel"
      }, {
        "id": 6,
        "name": "York",
        "gender": "Male",
        "department": "Services",
        "city": "Kyaukse"
      }, {
        "id": 7,
        "name": "Barnie",
        "gender": "Male",
        "department": "Training",
        "city": "Pasirpanjang"
      }, {
        "id": 8,
        "name": "Brigg",
        "gender": "Male",
        "department": "Services",
        "city": "Khoronk’"
      }, {
        "id": 9,
        "name": "Fredek",
        "gender": "Male",
        "department": "Sales",
        "city": "Ishioka"
      }, {
        "id": 10,
        "name": "Kordula",
        "gender": "Female",
        "department": "Support",
        "city": "Lapas"
      }]
    }
  },
  computed: {
    //use this filteredItems as the items prop in v-data-table
    filteredItems: function () {
      //call the filterItems method
      console.log("--computed item funciton--");
      return this.filterItems(this.employee, this.filterQry);
    }
  },
  methods: {
    //method to update the name query
    searchName: function (val) {
       console.log("--Search Name--");
      this.filterQry.qryName = val;
    },
 //method to update the gender query
    searchGender: function (val) {
       console.log("--Search Gender--");
      this.filterQry.qryGender = val;
    },
    
  
    
    //method to filter the items.
    filterItems: function(arr, query) {
      console.log("--filter item --");
      return arr.filter(function(item) {
        let gender = item.gender.toLowerCase().includes(query.qryGender.toLowerCase());
         let name = item.name.toLowerCase().includes(query.qryName.toLowerCase());
        return (name && gender);
      })
    }
  }
 
}
</script>

<style>

</style>