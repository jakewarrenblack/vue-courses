<template>
  <v-layout>
    <v-container>
      <h2>Edit Lecturer</h2>
      <hr />
      <v-form @submit.prevent="editCourse(form)">
        <div class="input-contain">
          <v-text-field
            label="Name"
            v-model="form.name"
            type="text"
            name="title"
          />
        </div>
        <div class="input-contain">
          <v-text-field
            label="Address"
            v-model="form.address"
            type="text"
            name="address"
          />
          <div class="input-contain">
            <v-text-field
              label="Phone"
              v-model="form.phone"
              type="text"
              name="phone"
            />
          </div>
          <div class="input-contain">
            <v-text-field
              label="Email"
              v-model="form.email"
              type="text"
              name="email"
            />
          </div>
        </div>
        <br />
        <v-btn class="secondary" type="submit">Submit</v-btn>
      </v-form>
    </v-container>
  </v-layout>
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
    editCourse(form) {
      let token = localStorage.getItem("token");

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
