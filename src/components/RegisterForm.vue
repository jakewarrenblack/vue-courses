<template>
  <div class="p-5">
    <h2 class="mb-10">Register</h2>
    <div v-if="!loggedIn">
      <v-text-field
        type="text"
        label="Name"
        v-model="form.name"
        :error-messages="nameErrors"
        @input="$v.form.name.$touch()"
        @blur="$v.form.name.$touch()"
      />
      <v-text-field
        type="email"
        label="Email"
        v-model="form.email"
        :error-messages="emailErrors"
        @input="$v.form.email.$touch()"
        @blur="$v.form.email.$touch()"
      />
      <v-text-field
        type="password"
        label="Password"
        v-model="form.password"
        :error-messages="passwordErrors"
        @input="$v.form.password.$touch()"
        @blur="$v.form.password.$touch()"
      />
      <br />
      <!-- we can still refer to a seemingly nonexistent login() method, because it exists
              inside the vuex store, it's like it gets pasted in by ...mapActions -->
      <!-- pass the entire form data as the 'credentials' param of the login method -->
      <v-btn color="secondary" @click="validateRegister(form)">Submit</v-btn>
    </div>
    <p v-else>Welcome back, {{ this.getName() }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "RegisterForm",
  mounted() {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  computed: {
    // make the store's 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push("Name is required");
      !this.$v.form.name.minLength &&
        errors.push("Name must be at least 3 characters");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push("Email is required");
      !this.$v.form.email.email &&
        errors.push("Email must be a valid email address");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.required && errors.push("Password is required");
      !this.$v.form.password.minLength &&
        errors.push("Password must be at least 6 characters");
      return errors;
    },
  },
  methods: {
    validateRegister(form) {
      var that = this;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        that.register(form);
      }
    },
    // this provides a reference to a method within the vuex store
    ...mapActions(["login", "register"]),
    getName() {
      return localStorage.getItem("name");
    },
  },
};
</script>
