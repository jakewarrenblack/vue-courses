<template>
  <v-dialog v-model="dialog.visible" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Are you sure? </v-card-title>
      <v-card-text>{{ dialog.message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog()">
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
  props: {
    course: Object,
  },
  computed: {
    dialog() {
      return this.$store.state.dialog;
    },
  },
  data() {
    return {
      // We can't mutate a prop directly, instead use data or a computed property
      childDialog: this.dialog,
    };
  },
  name: "Dialog",
  methods: {
    // If we pass no payload, the method presumes we're closing the dialog
    closeDialog() {
      this.$store.dispatch("toggleDialog");
    },
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
            .then(() => {
              that.$router.push({ name: "courses_index" });
              that.$store.dispatch("toggleSnackbar", {
                text: "Course deleted successfully!",
                timeout: 6000,
              });
              that.closeDialog();
            })
            .catch(function (error) {
              console.log(error);
              that.closeDialog();
            });
        })
        .catch(function (err) {
          console.log(err);
          that.closeDialog();
        });
    },
  },
};
</script>
