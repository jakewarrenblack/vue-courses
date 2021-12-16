<template>
  <v-container fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Add Enrolment</h2>
      </v-row>
      <v-divider />
      <!-- Prevent default, which is to refresh the page -->

      <v-col>
        <v-card elevation="7" class="p-4">
          <v-form @submit.prevent="addEnrolment(form)" ref="form">
            <div class="input-contain">
              <v-autocomplete
                v-model="form.status"
                :hint="`${select.state}`"
                persistent-hint
                single-line
                item-text="state"
                item-value="value"
                label="Select"
                :items="items"
                name="status"
                id="status"
                :error-messages="statusErrors"
                @input="$v.form.status.$touch()"
                @blur="$v.form.status.$touch()"
              >
              </v-autocomplete>
            </div>
            <v-alert v-if="errors.status" dismissible type="error">{{
              errors.status
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-autocomplete
                v-model="form.course_id"
                :items="courses"
                label="Course"
                single-line
                item-text="title"
                item-value="id"
                :error-messages="course_idErrors"
                @input="$v.form.course_id.$touch()"
                @blur="$v.form.course_id.$touch()"
              >
              </v-autocomplete>
            </div>
            <!-- This error will be shown if the lecturer is already enrolled on a course -->
            <v-alert v-if="errors.course_id" dismissible type="error">{{
              errors.course_id
            }}</v-alert>
            <br />
            <div class="input-contain">
              <v-autocomplete
                v-model="form.lecturer_id"
                :items="lecturers"
                label="Lecturer"
                single-line
                item-text="name"
                item-value="id"
                :error-messages="lecturer_idErrors"
                @input="$v.form.lecturer_id.$touch()"
                @blur="$v.form.lecturer_id.$touch()"
              >
              </v-autocomplete>
            </div>
            <v-alert v-if="errors.lecturer_id" dismissible type="error">{{
              errors.lecturer_id
            }}</v-alert>
            <br />
            <div class="input-contain">
              <div class="mb-6"></div>
              <v-menu
                ref="menu2"
                v-model="date_menu"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :error-messages="dateErrors"
                    @input="$v.date.$touch()"
                    @blur="$v.date.$touch()"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :active-picker.sync="activePicker"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </div>
            <v-alert v-if="errors.date" dismissible type="error">{{
              errors.date
            }}</v-alert>
            <br />
            <div class="input-contain">
              <div class="mb-6">
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time"
                      label="Picker in menu"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :error-messages="timeErrors"
                      @input="$v.time.$touch()"
                      @blur="$v.time.$touch()"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </div>
            </div>
            <v-alert v-if="errors.time" dismissible type="error">{{
              errors.time
            }}</v-alert>

            <br />
            <v-btn type="submit" color="secondary">Submit</v-btn>
            <v-btn color="error" class="ml-4" @click="reset">
              Reset Form
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
import { required, integer } from "vuelidate/lib/validators";
import { mapState } from "vuex";

export default {
  name: "coursesAdd",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      date_menu: false,
      date: null,
      time: null,
      menu2: false,
      modal2: false,
      form: {
        status: "",
        course_id: "",
        lecturer_id: "",
      },
      // Dropdown models the items, default is interested
      select: { state: "interested" },
      items: [
        { state: "interested", value: "interested" },
        { state: "assigned", value: "assigned" },
        { state: "career break", value: "career_break" },
        { state: "associate", value: "associate" },
      ],
      // Init to empty arrays, then fill them on mount
      courses: [],
      lecturers: [],
      errors: [],
    };
  },
  validations: {
    form: {
      status: {
        required,
      },
      course_id: {
        required,
        integer,
      },
      lecturer_id: {
        required,
        integer,
      },
    },
    date: {
      required,
    },
    time: {
      required,
    },
  },
  created() {
    document.title = "Add Enrolment";
  },
  computed: {
    ...mapState(["loggedIn"]),
    statusErrors() {
      const errors = [];
      if (!this.$v.form.status.$dirty) return errors;
      !this.$v.form.status.required && errors.push("Status is required");
      return errors;
    },
    course_idErrors() {
      const errors = [];
      if (!this.$v.form.course_id.$dirty) return errors;
      !this.$v.form.course_id.required && errors.push("Course ID is required");
      !this.$v.form.course_id.integer &&
        errors.push("Course ID must be an integer");
      return errors;
    },
    lecturer_idErrors() {
      const errors = [];
      if (!this.$v.form.lecturer_id.$dirty) return errors;
      !this.$v.form.lecturer_id.required &&
        errors.push("Lecturer ID is required");
      !this.$v.form.lecturer_id.integer &&
        errors.push("Lecturer ID must be an integer");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required");
      // !this.$v.date.date && errors.push("Date must be a valid date");
      return errors;
    },
    timeErrors() {
      const errors = [];
      if (!this.$v.time.$dirty) return errors;
      !this.$v.time.required && errors.push("Time is required");
      return errors;
    },
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
    this.getCourses();
    this.getLecturers();
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.$v.$reset();
    },
    async addEnrolment(form) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token || !this.loggedIn) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to add enrolments",
          timeout: 6000,
        });
      }

      this.$v.$touch();

      if (!this.$v.$invalid) {
        axios
          .post(
            `https://college-api-mo.herokuapp.com/api/enrolments`,
            {
              status: form.status,
              course_id: form.course_id,
              lecturer_id: form.lecturer_id,
              date: this.date,
              time: this.time,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )

          .then(() => {
            this.$router.push({ name: "enrolments_index" });
            // alert(`success\n${response}`);
            this.$store.dispatch("toggleSnackbar", {
              text: "Enrolment added successfully!",
              timeout: 6000,
            });
          })
          .catch((error) => {
            console.log(error);
            // this.$router.push({ name: "enrolments_index" });
            this.$store.dispatch("toggleSnackbar", {
              text: "Something went wrong",
              timeout: 6000,
            });
            this.errors = error.response.data.errors;
          });
      }
    },
    getCourses() {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to add courses",
          timeout: 6000,
        });
      }
      axios
        .get(`https://college-api-mo.herokuapp.com/api/courses`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.courses = response.data.data;
        })
        .catch((err) => console.log(err));
    },
    getLecturers() {
      let token = localStorage.getItem("token");
      axios
        .get(`https://college-api-mo.herokuapp.com/api/lecturers`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("lecturers:");
          console.log(response.data.data);
          this.lecturers = response.data.data;
        })
        .catch((err) => console.log(err));
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
