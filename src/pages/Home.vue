<template>
  <b-col>
    <h2>Welcome to the Festivals Website</h2>

    <div v-if="!loggedIn">
      <h4>Email</h4>
      <input type="email" v-model="form.email" />
      <br />
      <h4>Password</h4>
      <input type="password" v-model="form.password" />
      <br />
      <!-- we can still refer to a nonexistent login() method, because it exists
      inside the vuex store, it's like it gets pasted in by ...mapActions -->

      <!-- pass the entire form data as the 'credentials' param of the login method -->
      <v-btn @click="login(form)">Submit</v-btn>
    </div>
    <p v-else>You are logged in</p>
  </b-col>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      form: {
        email: "billy@bob.com",
        password: "secret",
      },
    };
  },
  computed: {
    // make the 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
  },
  methods: {
    // this provides a reference to a method within the vuex store
    ...mapActions(["login"]),
  },
};
</script>
