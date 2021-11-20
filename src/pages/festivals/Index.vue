<template>
  <b-col>
    <h2>Welcome to the course Index page</h2>
    <router-link :to="{ name: 'festivals_add' }"
      ><button>Add Course</button>
    </router-link>

    <hr />

    <!-- <form @submit="deleteCourse(selectedCourse)">
      <button type="button">Delete</button> -->
    <p v-for="course in courses" :key="course.id">
      <!-- <input
          v-model="selectedCourse"
          type="radio"
          id="course"
          name="course"
          :value="`${course.id}`"
        />&nbsp; -->
      <router-link
        :to="{ name: 'festivals_show', params: { id: course.id } }"
        >{{ course.title }}</router-link
      >
    </p>
    <!-- </form> -->
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
  async created() {
    await this.getData().then((res) => (this.courses = res));
  },
  methods: {
    // async deleteCourse(id) {
    //   let token = localStorage.getItem("token");
    //   await axios
    //     .delete(`https://college-api-mo.herokuapp.com/api/courses/${id}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then(async (response) => {
    //       console.log(response);
    //       // this.courses = response.data.data;
    //       //this.courses.pop()

    //       await this.getData().then((res) => (this.courses = res));
    //     })
    //     .catch((error) => console.log(error));
    // },
    async getData() {
      let token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://college-api-mo.herokuapp.com/api/courses`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        return response.data.data;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
