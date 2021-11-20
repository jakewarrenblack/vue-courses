<template>
  <b-col>
    <h2>Welcome to the course Index page</h2>
    <router-link :to="{ name: 'festivals_add' }"
      ><button>Add Course</button>
    </router-link>

    <hr />

    <button @submit.prevent="deleteCourse(selectedCourse)" type="submit">
      Delete
    </button>
    <p v-for="course in courses" :key="course.id">
      <input
        v-model="selectedCourse"
        type="radio"
        id="course"
        name="course"
        :value="`${course.id}`"
      />&nbsp;
      <router-link
        :to="{ name: 'festivals_show', params: { id: course.id } }"
        >{{ course.title }}</router-link
      >
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "FestivalsIndex",
  components: {},
  data() {
    return {
      courses: [],
      selectedCourse: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    deleteCourse(id) {
      let token = localStorage.getItem("token");
      axios
        .delete(`https://college-api-mo.herokuapp.com/api/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.courses = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(`https://college-api-mo.herokuapp.com/api/courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.courses = response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
