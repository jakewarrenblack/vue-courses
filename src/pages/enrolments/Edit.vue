<template>
  <v-container fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Edit Enrolment</h2>
      </v-row>
      <v-divider />
      <!-- Prevent default, which is to refresh the page -->

      <v-col>
        <v-card class="p-4">
          <v-form @submit.prevent="editEnrolment(form)">
            <div class="input-contain">
              <v-select
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
              >
              </v-select>
            </div>
            <br />
            <div class="input-contain">
              <v-select
                v-model="form.course_id"
                :items="courses"
                label="Course"
                single-line
                item-text="title"
                item-value="id"
              >
              </v-select>
            </div>
            <br />
            <div class="input-contain">
              <v-select
                v-model="form.lecturer_id"
                :items="lecturers"
                label="Lecturer"
                single-line
                item-text="name"
                item-value="id"
              >
              </v-select>
            </div>
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
      date_menu: false,
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
    };
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
    this.getData();
    this.getCourses();
    this.getLecturers();
  },
  methods: {
    editEnrolment(form) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
      }

      axios
        .put(
          `https://college-api-mo.herokuapp.com/api/enrolments/${this.$route.params.id}`,
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

        .then((response) => {
          this.$router.push({ name: "enrolments_index" });
          alert(`success\n${response}`);
        })
        .catch((error) => {
          console.log(error);
          console.log(form);
        });
    },
    getCourses() {
      let token = localStorage.getItem("token");
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
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/enrolments/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          var resp = response.data.data;
          this.form.status = resp.status;
          this.form.course_id = resp.course_id;
          this.form.lecturer_id = resp.lecturer_id;
          this.date = resp.date;
          this.time = resp.time;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
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
  margin: 1rem 0 1rem 0;
}
</style>
