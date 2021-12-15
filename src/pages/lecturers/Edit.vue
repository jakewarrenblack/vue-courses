<template>
  <v-container class="mx-auto" fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Edit Lecturer</h2>
      </v-row>
      <v-divider />
      <v-col>
        <v-card elevation="7" class="p-4">
          <v-form @submit.prevent="editLecturer(form)" ref="form">
            <div class="input-contain">
              <v-text-field
                label="Name"
                v-model="form.name"
                type="text"
                name="name"
                :error-messages="nameErrors"
                @input="$v.form.name.$touch()"
                @blur="$v.form.name.$touch()"
              />
            </div>
            <v-alert v-if="errors.name" dismissible type="error">{{
              errors.name
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Address"
                v-model="form.address"
                type="text"
                name="address"
                :error-messages="addressErrors"
                @input="$v.form.address.$touch()"
                @blur="$v.form.address.$touch()"
              />
            </div>
            <v-alert v-if="errors.address" dismissible type="error">{{
              errors.address
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Phone"
                v-model="form.phone"
                type="text"
                name="phone"
                :error-messages="phoneErrors"
                @input="$v.form.phone.$touch()"
                @blur="$v.form.phone.$touch()"
              />
            </div>
            <v-alert v-if="errors.phone" dismissible type="error">{{
              errors.phone
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Email"
                v-model="form.email"
                type="email"
                name="email"
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
              />
            </div>
            <v-alert v-if="errors.email" dismissible type="error">{{
              errors.email
            }}</v-alert>
            <br />
            <v-btn type="submit" color="secondary">Submit</v-btn>
            <v-btn color="error" class="ml-4" @click="reset">
              Reset Form
            </v-btn>
            <v-btn color="" class="ml-4" @click="refillValues()">
              Refill Values
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, numeric, email, maxLength } from "vuelidate/lib/validators";

export default {
  name: "coursesAdd",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      lecturer: {},
      errors: [],
    };
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(50),
      },
      address: {
        required,
        maxLength: maxLength(100),
      },
      phone: {
        required,
        numeric,
        maxLength: maxLength(20),
      },
      email: {
        required,
        email,
        maxLength: maxLength(50),
      },
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push("Name is required");
      !this.$v.form.name.maxLength &&
        errors.push("Name may be no more than 50 characters");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.form.address.$dirty) return errors;
      !this.$v.form.address.required && errors.push("Address is required");
      !this.$v.form.address.maxLength &&
        errors.push("Name may be no more than 100 characters");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.form.phone.$dirty) return errors;
      !this.$v.form.phone.required && errors.push("Phone is required");
      !this.$v.form.phone.numeric && errors.push("Phone must be a numeric");
      !this.$v.form.phone.maxLength &&
        errors.push("Phone must be no more than 20 digits long");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push("Email is required");
      !this.$v.form.email.email &&
        errors.push("Email must be a valid email address");
      !this.$v.form.email.maxLength &&
        errors.push("Phone must be no more than 50 characters");
      return errors;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.$v.$reset();
    },
    refillValues() {
      this.form.name = this.lecturer.name;
      this.form.address = this.lecturer.address;
      this.form.phone = this.lecturer.phone;
      this.form.email = this.lecturer.email;
    },
    getData() {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });

        this.$store.dispatch("toggleSnackbar", {
          text: "Login to edit lecturers",
          timeout: 6000,
        });
      }
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

          this.lecturer = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
    editLecturer(form) {
      let token = localStorage.getItem("token");

      this.$v.$touch();

      if (!this.$v.$invalid) {
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

          .then(() => {
            this.$router.push({ name: "lecturers_index" });
            this.$store.dispatch("toggleSnackbar", {
              text: "Lecturer edited successfully!",
              timeout: 6000,
            });
          })
          .catch((error) => {
            console.log(error);
            //console.log(form);
            //this.$router.push({ name: "lecturers_index" });
            this.$store.dispatch("toggleSnackbar", {
              text: "Something went wrong",
              timeout: 6000,
            });
            this.errors = error.response.data.errors;
            //localStorage.removeItem("token");
            // this.$emit('invalid-token')
          });
      }
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
