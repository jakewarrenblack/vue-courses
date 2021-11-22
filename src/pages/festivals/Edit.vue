<template>
  <b-col>
    <h2>Edit course page</h2>
    <hr />
    <v-form @submit.prevent="editCourse(form, course.id)">
      <div class="input-contain">
        <v-text-field
          label="Title"
          v-model="form.title"
          type="text"
          name="title"
        />
      </div>
      <div class="input-contain">
        <v-text-field
          label="Code"
          v-model="form.code"
          type="text"
          name="code"
        />
      </div>
      <br />
      <div class="input-contain">
        <v-textarea
          label="Description"
          v-model="form.description"
          name="description"
        />
      </div>
      <br />
      <div class="input-contain">
        <v-text-field
          label="Points"
          v-model="form.points"
          type="text"
          name="points"
        />
      </div>
      <br />
      <div class="input-contain">
        <v-text-field
          label="Level"
          v-model="form.level"
          type="text"
          name="level"
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
      course: null,
      form: {
        title: null,
        code: null,
        description: null,
        points: null,
        level: null,
      },
    };
  },
  async mounted() {
    await this.getData().then((res) => {
      this.course = res;
      this.form.title = this.course.title;
      this.form.code = this.course.code;
      this.form.description = this.course.description;
      this.form.points = this.course.points;
      this.form.level = this.course.level;
    });
  },
  methods: {
    async getData() {
      let token = localStorage.getItem("token");
      return axios
        .get(
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          return response.data.data;
          //this.course = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
    editCourse(form, id) {
      let token = localStorage.getItem("token");

      axios
        .put(
          `https://college-api-mo.herokuapp.com/api/courses/${id}`,
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
