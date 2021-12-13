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
    };
  },
  mounted() {
    //this.getData();\
    console.log(localStorage.getItem("token"));
  },
  methods: {
    addCourse(form) {
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
          this.$router.push({ name: "courses_index" });
          // alert(`success\n${response}`);
          this.$store.dispatch("toggleSnackbar", {
            text: "Something went wrong",
            timeout: 6000,
          });
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
.container {
  margin: 2rem;
}
</style>
