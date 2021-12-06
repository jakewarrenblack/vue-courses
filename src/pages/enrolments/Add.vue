<template>
  <b-col>
    <h2>Add course page</h2>
    <hr />
    <v-form @submit.prevent="addEnrolment(form)">
      <div class="input-contain">
        <v-select
          v-model="form.status"
          :hint="`${select.state}`"
          persistent-hint
          single-line
          item-text="state"
          item-value="state"
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
        <v-text-field
          label="Date"
          v-model="form.date"
          type="date"
          name="date"
        />
      </div>
      <br />
      <div class="input-contain">
        <v-text-field
          label="Time"
          v-model="form.time"
          type="time"
          name="time"
        />
      </div>
      <br />
      <v-btn type="submit">Submit</v-btn>
    </v-form>
  </b-col>
</template>
<script>
import axios from "axios";

export default {
  name: "FestivalsAdd",
  components: {},
  data() {
    return {
      form: {
        status: "Interested",
        course_id: "1234",
        lecturer_id: "50",
        date: "30-05-2021",
        time: "00:00:00",
      },
      // Dropdown models the items, default is interested
      select: { state: "interested" },
      items: [
        { state: "interested" },
        { state: "assigned" },
        { state: "career break" },
        { state: "associate" },
      ],
      // Init to empty arrays, then fill them on mount
      courses: [],
      lecturers: [],
    };
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
    this.getCourses();
    this.getLecturers();
  },
  methods: {
    addEnrolment(form) {
      let token = localStorage.getItem("token");

      axios
        .post(
          `https://college-api-mo.herokuapp.com/api/enrolments`,
          {
            status: form.status,
            course_id: form.course_id,
            lecturer_id: form.lecturer_id,
            date: form.date,
            time: form.time,
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
  },
};
</script>

<style scoped>
.input-contain {
  display: flex;
  flex-direction: column;
}
</style>
