<template>
  <v-container class="mx-auto" fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Add Lecturer</h2>
      </v-row>
      <v-divider />
      <v-col>
        <v-card elevation="7" class="p-4">
          <v-form @submit.prevent="addLecturer(form)">
            <div class="input-contain">
              <v-text-field
                label="Name"
                v-model="form.name"
                type="text"
                name="name"
              />
            </div>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Address"
                v-model="form.address"
                type="text"
                name="address"
              />
            </div>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Phone"
                v-model="form.phone"
                type="text"
                name="phone"
              />
            </div>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Email"
                v-model="form.email"
                type="email"
                name="email"
              />
            </div>
            <br />
            <v-btn type="submit">Submit</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "coursesAdd",
  components: {},
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
    };
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
  },
  methods: {
    addLecturer(form) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to add lecturers",
          timeout: 6000,
        });
      }

      axios
        .post(
          `https://college-api-mo.herokuapp.com/api/lecturers`,
          {
            name: form.name,
            address: form.address,
            phone: form.phone,
            email: form.email,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )

        .then(() => {
          this.$router.push({ name: "lecturers_index" });
          // alert(`success\n${response}`);
          this.$store.dispatch("toggleSnackbar", {
            text: "Lecturer added successfully!",
            timeout: 6000,
          });
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({ name: "lecturers_index" });
          // alert(`success\n${response}`);
          this.$store.dispatch("toggleSnackbar", {
            text: "Something went wrong",
            timeout: 6000,
          });
        });
    },
  },
};
</script>

<style scoped>
.input-contain {
  display: flex;
  flex-direction: column;
}
</style>
