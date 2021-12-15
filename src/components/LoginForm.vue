<template>
  <div class="p-5">
    <h2 v-if="!loggedIn" class="mb-10">Login</h2>
    <h2 v-else class="mb-10">Welcome</h2>
    <div v-if="!loggedIn">
      <v-text-field
        type="email"
        label="Email"
        v-model="form.email"
        :error-messages="emailErrors"
        @input="$v.form.email.$touch()"
        @blur="$v.form.email.$touch()"
      />
      <v-alert
        v-if="loginErrors != null && loginErrors.email"
        type="error"
        dismissible
        >{{ JSON.stringify(loginErrors.email) }}</v-alert
      >
      <br />
      <v-text-field
        type="password"
        label="Password"
        v-model="form.password"
        :error-messages="passwordErrors"
        @input="$v.form.password.$touch()"
        @blur="$v.form.password.$touch()"
      />
      <v-alert
        v-if="loginErrors != null && loginErrors.name"
        type="error"
        dismissible
        >{{ JSON.stringify(loginErrors.name) }}</v-alert
      >
      <br />
      <!--Otherwise, show the generic error, probably 'unauthorised' -->
      <v-alert
        v-if="loginErrors != null && loginErrors.error"
        type="error"
        dismissible
        >{{ JSON.stringify(loginErrors.error) }}</v-alert
      >
      <!-- we can still refer to a seemingly nonexistent login() method, because it exists
              inside the vuex store, it's like it gets pasted in by ...mapActions -->
      <!-- pass the entire form data as the 'credentials' param of the login method -->
      <v-btn color="secondary" @click="validateLogin(form)">Submit</v-btn>
    </div>
    <p v-else>Welcome back, {{ this.getName() }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",
  mounted() {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
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
    loginErrors() {
      return this.$store.state.loginErrors;
    },
    // make the store's 'loggedIn' state available directly inside home
    ...mapState(["loggedIn"]),
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
    validateLogin(form) {
      var that = this;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        that.login(form);
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
