<template>


  <div class="container">

      <label for="album">Choose a album</label>

        <select id="album" name="album" @change="onChange()">
        <option value="0">Select Album</option>
        <option value="Thriller">Thriller</option>
        <option value="BAD">BAD</option>
        <option value="History">History</option>
        </select>

      <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options"
          >
      </v-client-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            columns: ['id', 'name', 'album'],
            tableData: [],
            options: {
                headings: {
                    id: 'ID',
                    name: 'Song Name',
                    album: 'Album'
                },
                sortable: ['name', 'album'],
                filterable: ['name', 'album'],
                 perPage: 5,
                 perPageValues: [5,10,15],
                // filterByColumn: true,
                  customFilters: [{
                name: 'album',
                callback: function(row, query) {
                    return row.name[0] == query;
                }
                }]
  
            }
        }
    },
    mounted() {
        axios.get('http://localhost:4000/songs').then(res => {
            this.tableData = res.data
        })
    },
    methods:    {
        onChange(event) {
        if(event.target.value==0){
            this.tableData =[];
            axios.get('http://localhost:4000/songs').then(res => {
            this.tableData = res.data
        })
        }
        else{
        this.tableData =[];
         axios.get('http://localhost:4000/songs?album='+event.target.value).then(res => {
            this.tableData = res.data
        })
        }
        
        }
    }
 
}
</script>

<style>
#app {
  width: 95%;
  margin-top: 50px; 
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
.VueTables__search{
    float: right;
}

</style>