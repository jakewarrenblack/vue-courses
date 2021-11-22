<template>
  <b-col>
    <h2>Add course page</h2>
    <hr />
    <v-form @submit.prevent="addCourse(form)">
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
        <v-text-field
          label="Course ID"
          v-model="form.course_id"
          type="text"
          name="course_id"
        />
      </div>
      <br />
      <div class="input-contain">
        <v-text-field
          label="Lecturer ID"
          v-model="form.lecturer_id"
          name="lecturer_id"
        />
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
      select: { state: "interested" },
      items: [
        { state: "interested" },
        { state: "assigned" },
        { state: "career break" },
        { state: "associate" },
      ],
    };
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
  },
  methods: {
    addCourse(form) {
      let token = localStorage.getItem("token");

      console.log("LOGGING FORM DATA:");
      console.log(form.status);
      console.log(form.course_id);
      console.log(form.lecturer_id);
      console.log(form.date);
      console.log(form.time);

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
