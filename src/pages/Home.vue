<template>
  <b-col>
    <h2>Welcome to the CHAD Festivals Website</h2>

    <div v-if="!loggedIn">
    <h4>Email</h4>
    <input type="email" v-model="form.email" />
    <br>
     <h4>Password</h4>
     <input type="password" v-model="form.password" />
     <br>
     <button @click="login()">Submit</button>
    </div>
    <p v-else>
      You are logged in 
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  components: {

  },
  props: {
    loggedIn: Boolean,
  },
  data() {
    return {
      form : {
        email: "admin@festivals.ie",
        password: "secret",
      },
  
    }
  },
  methods:{
 
    login(){
        axios.post(`http://festivals-api.herokuapp.com/api/users/login`, {
          email: this.form.email, 
          password: this.form.password
        })
              .then(response => {
               console.log(response.data.token)
            
               this.$emit('login', response.data.token)
              })
              .catch(error => {
                console.log(error)
                console.log(error.response.data.message)
              })
    }
  }
};
</script>
