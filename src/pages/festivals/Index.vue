<template>
  <b-col>
    <h2>Welcome to the Festivals Index page</h2>

    <p
     v-for="festival in festivals"
     :key="festival._id"
    >
  

    <router-link :to="{name: 'festivals_show', params: {id: festival._id}}">{{festival.title}}</router-link>
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FestivalsIndex",
  components: {},
   data() {
       return {
            festivals: [],
       }
   },
   mounted() {
       this.getData()
   },
   methods: {
       getData() {
           axios
           .get("http://festivals-api.herokuapp.com/api/festivals")
           .then(response => {
               console.log(response)
               this.festivals = response.data
           })
           .catch(error => console.log(error))
       }
   },

  };
</script>
