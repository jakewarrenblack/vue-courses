<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Are you sure? </v-card-title>
      <v-card-text v-if="course.enrolments.length > 0"
        >This deletion will be permanent. All associated enrolments for this
        course will also be deleted.</v-card-text
      >
      <v-card-text v-else>This deletion will be permanent.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="green darken-1" text @click="deleteCourse(course.id)">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "Dialog",
  props: {
    message: String,
    course: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async deleteCourse(id) {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to view courses",
          timeout: 6000,
        });
      }

      // Iterate over the enrolments and delete each one
      let listOfDeleteRequests = this.course.enrolments.map((current) =>
        axios.delete(
          `https://college-api-mo.herokuapp.com/api/enrolments/${current.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
      );

      // Need a reference to the right 'that', scope problem if we try to refer to 'this' inside the .then
      var that = this;
      // Run all requests
      axios
        .all(listOfDeleteRequests)
        .then(function () {
          axios
            .delete(`https://college-api-mo.herokuapp.com/api/courses/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            // When that's done, delete the course itself
            .then((response) => {
              console.log(response);
              that.$router.push({ name: "courses_index" });
              alert("Success");
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
