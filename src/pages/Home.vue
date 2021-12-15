<template>
  <v-img
    class="bgImage"
    :lazy-src="smallSrc"
    height="100%"
    max-height="100%"
    max-width="100%"
    :src="largeSrc"
  >
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
  </v-img>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.removeBreakTag();
    this.getImage();
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      name: "",
      smallSrc: localStorage.getItem("smallSrc"),
      largeSrc: localStorage.getItem("largeSrc"),
      activeForm: "login",
    };
  },
  computed: {
    // make the store's 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
  },
  methods: {
    // I only want an the background image to change once a day, not every time the user visits the homepage
    hasOneDayPassed() {
      // form is: "12/15/2021"
      var date = new Date().toLocaleDateString();

      // If todays_date exists in localstorage and it's the same as the current date we got above, a day must not have passed yet, so leave it as is
      if (localStorage.todays_date == date) return false;

      // If existing localStorage date is not the same as today's date, a day must have past, so change it
      localStorage.todays_date = date;
      return true;
    },
    // this provides a reference to a method within the vuex store
    ...mapActions(["login", "register"]),
    getName() {
      return localStorage.getItem("name");
    },
    removeBreakTag() {
      if (
        document.getElementsByTagName("BR"[0]) != null &&
        document.getElementsByTagName("BR"[0]) != undefined
      ) {
        document.getElementsByTagName("BR")[0].remove();
      }
    },
    getImage() {
      if (!this.hasOneDayPassed()) return false;
      //var that = this;
      // if the call to unsplash fails, it will call to pexels instead
      axios
        .get(
          `https://api.unsplash.com/photos/random?client_id=9LhVwLjJrdIy5jX3svklsUACp0mByDjsrzbJNTZGAqg&query=nature`
        )
        .then(function (response) {
          // document.getElementById(
          //   "background"
          // ).style.backgroundImage = `url(${response.data.urls.full})`;
          // that.smallSrc = response.data.urls.small;
          localStorage.setItem("smallSrc", response.data.urls.small);
          // that.largeSrc = response.data.urls.full;
          localStorage.setItem("largeSrc", response.data.urls.full);
        })
        .catch(function (error) {
          console.log(error);
          //call to pexels instead
          //unsplash has good photos but rate limited to 50 per hour, pexels is 200
          const URL = `https://api.pexels.com/v1/search?query=nature&per_page=1&orientation=landscape`;
          const API_KEY = `563492ad6f91700001000001660dc6de6e62494da4a3601ccfc6ecc3`;
          axios
            .get(URL, {
              headers: { Authorization: `Bearer ${API_KEY}` },
            })
            .then((response) => {
              // that.imageSrc = response.data.photos[0].src.large2x;
              // document.getElementById(
              //   "background"
              // ).style.backgroundImage = `url(${response.data.photos[0].src.large2x})`;
              // that.smallSrc = response.data.urls.small;
              localStorage.setItem("smallSrc", response.data.urls.small);
              // that.largeSrc = response.data.urls.large2x;
              localStorage.setItem("largeSrc", response.data.urls.large2x);
            })
            .catch((error) => console.log(error));
        });
    },
  },
};
</script>

<style scoped>
.bgImage {
  max-height: 100vh !important;
}
.background-img::before {
  content: "";
  /* background-image: url("../assets/background.jpg"); */
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
