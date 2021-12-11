<template>
  <v-container class="mx-auto" fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Edit Lecturer</h2>
      </v-row>
      <v-divider />
      <v-col>
        <v-card class="p-4">
          <v-form @submit.prevent="editLecturer(form)">
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
    this.getData();
  },
  methods: {
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          var res = response.data.data;

          this.form.name = res.name;
          this.form.address = res.address;
          this.form.phone = res.phone;
          this.form.email = res.email;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
    editLecturer(form) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
      }

      axios
        .put(
          `https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
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

        .then((response) => {
          this.$router.push({ name: "lecturers_index" });
          alert(`success\n${response}`);
        })
        .catch((error) => {
          console.log(error);
          console.log(form);
          //localStorage.removeItem("token");
          // this.$emit('invalid-token')
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
