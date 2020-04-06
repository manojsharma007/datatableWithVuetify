<template>

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
              <!-- call method searchDept after leaving textfield-->
              <v-text-field
                append-icon="search"
                label="Department"
                single-line
                hide-details
                @change="searchDept"
                ></v-text-field>
            </v-flex>
            <v-flex xs4>
              <!-- call method searchCity after leaving textfield-->
              <v-text-field
                append-icon="search"
                label="City"
                single-line
                hide-details
                @change="searchCity"
                ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        
        >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.gender }}</td>
          <td class="text-xs-left">{{ props.item.department }}</td>
        </template>
       
        <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, Found no results
        </v-alert>
      </template>
      </v-data-table>
    </v-card>
  </v-app>
  

</div>

</template>

<script>
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Vue.use(Vuetify)
export default {
   // vuetify: new Vuetify(),
     data () {
    return { 
      filterQry: {
        //you can use Object if you want to do multiple-filter
        //or you can use String if you just want to single-filter 
        qryName: "",
        qryDept: "",
        qryCity: "",
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
      console.log("--Filtered item --");
      return this.filterItems(this.employee, this.filterQry);
    }
  },
  methods: {
    
    //method to update the name query
    searchName: function (val) {
       console.log("--Search Name--");
      this.filterQry.qryName = val;
    },
    
    //method to update the department query
    searchDept: function (val) {
      console.log("--Search Dept--");
      this.filterQry.qryDept = val;
 
    },
    
    //method to update the department query
    searchCity: function (val) {
      console.log("--Search city--")
      this.filterQry.qryCity = val;
    },
    
    //method to filter the items.
    filterItems: function(arr, query) {
      console.log("--filter item --");
      return arr.filter(function(item) {
        let name = item.name.toLowerCase().includes(query.qryName.toLowerCase());
        let dept = item.department.toLowerCase().includes(query.qryDept.toLowerCase());
        let city = item.city.toLowerCase().includes(query.qryCity.toLowerCase());
        return (name && dept && city);
      })
    }
  }
 
}
</script>

<style>

</style>