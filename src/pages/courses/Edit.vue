<template>
  <v-container class="mx-auto" fill-height fluid>
    <v-row class="w-100 d-flex justify-center">
      <v-row class="mb-8 w-100 d-flex justify-center">
        <h2 class="">Edit Course</h2>
      </v-row>
      <v-divider />
      <!-- Prevent default, which is to refresh the page -->

      <v-col>
        <v-card elevation="7" class="p-4">
          <v-form @submit.prevent="editCourse(form)">
            <div class="input-contain">
              <v-text-field
                label="Title"
                v-model="form.title"
                type="text"
                name="title"
              />
            </div>
            <br />
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
                height="90"
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
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
      course_id: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          var res = response.data.data;
          this.form.title = res.title;
          this.form.code = res.code;
          this.form.description = res.description;
          this.form.points = res.points;
          this.form.level = res.level;

          this.course_id = res.id;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
    editCourse(form) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to edit courses",
          timeout: 6000,
        });
      }
      axios
        .put(
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
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
          this.$router.push({ name: "courses_index" });
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
