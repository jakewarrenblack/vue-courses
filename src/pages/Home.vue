<template>
  <div class="background-img">
    <v-container fill-height class="container">
      <v-layout align-center justify-center class="m-auto" style="height: 40%">
        <v-col lg="8" class="">
          <v-card>
            <v-row
              v-if="!loggedIn"
              class="d-flex justify-space-between flex-row m-0"
              fill-width
            >
              <v-btn
                tile
                large
                depressed
                class="w-50"
                @click="activeForm = 'login'"
                >Login</v-btn
              >
              <v-btn
                tile
                large
                depressed
                class="w-50"
                @click="activeForm = 'register'"
                >Register</v-btn
              >
            </v-row>
            <v-divider v-if="!loggedIn" />
            <div v-if="activeForm == 'login'" class="p-5">
              <h2 class="mb-10">Login</h2>
              <div v-if="!loggedIn">
                <v-text-field type="email" label="Email" v-model="form.email" />
                <br />
                <v-text-field
                  type="password"
                  label="Password"
                  v-model="form.password"
                />
                <br />
                <!-- we can still refer to a seemingly nonexistent login() method, because it exists
              inside the vuex store, it's like it gets pasted in by ...mapActions -->
                <!-- pass the entire form data as the 'credentials' param of the login method -->
                <v-btn color="secondary" @click="login(form)">Submit</v-btn>
              </div>
              <p v-else>Welcome back, {{ this.getName() }}</p>
            </div>
            <div v-if="activeForm == 'register'" class="p-5">
              <h2 class="mb-10">Register</h2>
              <div v-if="!loggedIn">
                <v-text-field type="text" label="Name" v-model="form.name" />
                <br />
                <v-text-field type="email" label="Email" v-model="form.email" />
                <v-text-field
                  type="password"
                  label="Password"
                  v-model="form.password"
                />
                <br />
                <!-- we can still refer to a seemingly nonexistent login() method, because it exists
              inside the vuex store, it's like it gets pasted in by ...mapActions -->
                <!-- pass the entire form data as the 'credentials' param of the login method -->
                <v-btn color="secondary" @click="register(form)">Submit</v-btn>
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
        name: "",
        email: "",
        password: "",
      },
      name: "",
      activeForm: "login",
    };
  },
  computed: {
    // make the store's 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
  },
  methods: {
    // this provides a reference to a method within the vuex store
    ...mapActions(["login", "register"]),
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
