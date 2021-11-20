<template>
  <b-col>
    <h2>Add course page</h2>
    <hr />
    <form @submit.prevent="addCourse(form)">
      <div class="input-contain">
        <label for="title">Title</label>
        <input v-model="form.title" type="text" name="title" />
      </div>
      <br />
      <div class="input-contain">
        <label for="code">Code</label>
        <input v-model="form.code" type="text" name="code" />
      </div>
      <br />
      <div class="input-contain">
        <label for="description">Description</label>
        <textarea v-model="form.description" name="description" />
      </div>
      <br />
      <div class="input-contain">
        <label for="points">Points</label>
        <input v-model="form.points" type="text" name="points" />
      </div>
      <br />
      <div class="input-contain">
        <label for="level">Level</label>
        <input v-model="form.level" type="text" name="level" />
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
        title: "Form name",
        code: "1234",
        description: "Some description",
        points: "100",
        level: "8",
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
