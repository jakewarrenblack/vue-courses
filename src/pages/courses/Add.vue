<template>
  <v-container class="mx-auto" fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Add Course</h2>
      </v-row>
      <v-divider />
      <!-- Prevent default, which is to refresh the page -->

      <v-col>
        <v-card elevation="7" class="p-4">
          <v-form @submit.prevent="addCourse(form)">
            <div class="input-contain">
              <v-text-field
                label="Title"
                v-model="form.title"
                type="text"
                name="title"
                :error-messages="titleErrors"
                @input="$v.form.title.$touch()"
                @blur="$v.form.title.$touch()"
              />
            </div>
            <!-- These api errors are included for redundancy, the form shouldn't submit without meeting the validation requirements anyway -->
            <v-alert v-if="errors.title" type="error">{{
              errors.title
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Code"
                v-model="form.code"
                type="text"
                name="code"
                :error-messages="codeErrors"
                @input="$v.form.code.$touch()"
                @blur="$v.form.code.$touch()"
              />
            </div>
            <v-alert v-if="errors.code" type="error">{{ errors.code }}</v-alert>
            <br />
            <div class="input-contain">
              <v-textarea
                height="90"
                label="Description"
                v-model="form.description"
                name="description"
                :error-messages="descriptionErrors"
                @input="$v.form.description.$touch()"
                @blur="$v.form.description.$touch()"
              />
            </div>
            <v-alert v-if="errors.description" type="error">{{
              errors.description
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Points"
                v-model="form.points"
                type="text"
                name="points"
                :error-messages="pointsErrors"
                @input="$v.form.points.$touch()"
                @blur="$v.form.points.$touch()"
              />
            </div>
            <v-alert v-if="errors.points" type="error">{{
              errors.points
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-text-field
                label="Level"
                v-model="form.level"
                type="text"
                name="level"
                :error-messages="levelErrors"
                @input="$v.form.level.$touch()"
                @blur="$v.form.level.$touch()"
              />
            </div>
            <v-alert v-if="errors.level" type="error">{{
              errors.level
            }}</v-alert>
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
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  between,
  alphaNum,
  integer,
} from "vuelidate/lib/validators";

export default {
  name: "coursesAdd",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
      validations: {},
      errors: [],
    };
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
      },
      code: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(5),
        alphaNum,
      },
      description: {
        required,
      },
      points: {
        required,
        between: between(100, 1000),
        integer,
      },
      level: {
        required,
        between: between(7, 10),
        integer,
      },
    },
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.form.title.$dirty) return errors;
      !this.$v.form.title.minLength &&
        errors.push("Title must be at least 3 characters");
      !this.$v.form.title.maxLength &&
        errors.push("Title must be no more than 50 characters");
      !this.$v.form.title.required && errors.push("Title is required");
      return errors;
    },
    codeErrors() {
      const errors = [];
      if (!this.$v.form.code.$dirty) return errors;
      !this.$v.form.code.minLength &&
        errors.push("Code must be at least 1 character");
      !this.$v.form.code.maxLength &&
        errors.push("Code must be no more than 5 characters");
      !this.$v.form.code.required && errors.push("Code is required");
      !this.$v.form.code.alphaNum && errors.push("Code must be alphanumeric");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.form.description.$dirty) return errors;
      !this.$v.form.description.required &&
        errors.push("Description is required");
      return errors;
    },
    pointsErrors() {
      const errors = [];
      if (!this.$v.form.points.$dirty) return errors;
      !this.$v.form.points.between &&
        errors.push("Points must be between 100 and 1000");
      !this.$v.form.points.required && errors.push("Points are required");
      !this.$v.form.points.integer && errors.push("Points must be an integer");
      return errors;
    },
    levelErrors() {
      const errors = [];
      if (!this.$v.form.level.$dirty) return errors;
      !this.$v.form.level.between &&
        errors.push("Level must be between 7 and 10");
      !this.$v.form.level.required && errors.push("Level is required");
      !this.$v.form.level.integer && errors.push("Level must be an integer");
      return errors;
    },
  },
  methods: {
    async addCourse(form) {
      if (!this.$v.$invalid) {
        let token = localStorage.getItem("token");

        this.$v.$touch();
        if (!token) {
          this.$router.push({ name: "home" });
          this.$store.dispatch("toggleSnackbar", {
            text: "Login to add courses",
            timeout: 6000,
          });
        }

        axios
          .post(
            `https://college-api-mo.herokuapp.com/api/courses`,
            {
              title: form.title,
              code: form.code,
              description: form.description,
              points: form.points,
              level: form.level,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )

          .then(() => {
            this.$router.push({ name: "courses_index" });
            // alert(`success\n${response}`);
            this.$store.dispatch("toggleSnackbar", {
              text: "Course added successfully!",
              timeout: 6000,
            });
          })
          .catch((error) => {
            console.log(error);
            //            this.$router.push({ name: "courses_index" });
            this.errors = error.response.data.errors;
            // alert(`success\n${response}`);
            this.$store.dispatch("toggleSnackbar", {
              text: "Something went wrong",
              timeout: 6000,
            });
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
.container {
  margin: 2rem;
}
</style>
