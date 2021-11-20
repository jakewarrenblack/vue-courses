<template>
  <b-col>
    <h2>Add course page</h2>
    <hr />
    <form @submit.prevent="addCourse(form)">
      <div class="input-contain">
        <label for="status">Status:</label>
        <select v-model="form.status" name="status" id="status">
          <option default value="interested">interested</option>
          <option value="assigned">assigned</option>
          <option value="career_break">career break</option>
          <option value="associate">associate</option>
        </select>
      </div>
      <br />
      <div class="input-contain">
        <label for="course_id">Course ID</label>
        <input v-model="form.course_id" type="text" name="course_id" />
      </div>
      <br />
      <div class="input-contain">
        <label for="description">Lecturer ID</label>
        <textarea v-model="form.lecturer_id" name="lecturer_id" />
      </div>
      <br />
      <div class="input-contain">
        <label for="date">Date</label>
        <input v-model="form.date" type="date" name="date" />
      </div>
      <br />
      <div class="input-contain">
        <label for="time">Time</label>
        <input v-model="form.time" type="time" name="time" />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
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
