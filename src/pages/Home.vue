<template>
  <div class="background-img">
    <v-container fill-height class="container">
      <v-layout align-center justify-center class="m-auto" style="height: 40%">
        <v-col lg="8" class="">
          <v-card>
            <div class="p-5">
              <h2 class="mb-10">Welcome</h2>
              <hr />
              <div v-if="!loggedIn">
                <h4>Email</h4>
                <v-text-field type="email" v-model="form.email" />
                <br />
                <h4>Password</h4>
                <v-text-field type="password" v-model="form.password" />
                <br />
                <!-- we can still refer to a seemingly nonexistent login() method, because it exists
              inside the vuex store, it's like it gets pasted in by ...mapActions -->
                <!-- pass the entire form data as the 'credentials' param of the login method -->
                <v-btn @click="login(form)">Submit</v-btn>
              </div>
              <p v-else>Welcome back, {{ this.getName() }}</p>
            </div>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.removeBreakTag();
  },
  data() {
    return {
      form: {
        email: "billy@bob.com",
        password: "secret",
      },
      name: "",
    };
  },
  computed: {
    // make the 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
  },
  methods: {
    // this provides a reference to a method within the vuex store
    ...mapActions(["login"]),
    getName() {
      return localStorage.getItem("name");
    },
    removeBreakTag() {
      document.getElementsByTagName("BR")[0].remove();
    },
  },
};
</script>

<style scoped>
.background-img::before {
  content: "";
  background-image: url("../assets/background.jpg");
  background-size: cover;
  filter: brightness(0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.background-img {
  height: 100%;
}
</style>
